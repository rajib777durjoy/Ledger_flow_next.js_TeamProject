'use server'

import { imagekitUpload } from "@/app/Imagekit/Imagekit";
import sql from "@/lib/db.connect";


const AddProductAction = async (formData,userId) => {
  try {
    const clerk_id = userId;
    console.log('clerk id in prod::;',clerk_id)
    if (!clerk_id) {
      return { success: false, message: "Unauthorized" };
    }

    const data = Object.fromEntries(formData.entries());

    const [userExist] = await sql`
      SELECT * FROM users_table WHERE clerk_id = ${clerk_id} LIMIT 1;
    `;
    console.log('userExist',userExist.id)
    if (!userExist) {
      return { success: false, message: "User not found" };
    }

    if (userExist.role !== "shopkeeper") {
      return { success: false, message: "Not a shopkeeper" };
    }

    const file = formData.get("image");

    if (!file) {
      return { success: false, message: "Image required" };
    }

    const uploadResult = await imagekitUpload(file);

    if (!uploadResult?.url) {
      return { success: false, message: "Image upload failed" };
    }

    const imageUrl = uploadResult.url;

    const shop = await sql`SELECT id FROM shop_table WHERE user_id = ${userExist.id} ;
    `;

    console.log('shop:: ',shop)
    const shop_id = shop[0]?.id;
    console.log(shop_id)
    if (!shop_id) {
      return { success: false, message: "Shop not found" };
    }

    const {
      product_name,
      description,
      price,
      quantity,
      unity,
      category,
    } = data;

    const InsertProduct = await sql`
      INSERT INTO products_table 
      (shop_id, product_name, price, quantity, unity, description, category, image_url)
      VALUES 
      (${shop_id}, ${product_name}, ${price}, ${quantity}, ${unity}, ${description}, ${category}, ${imageUrl})
      RETURNING *;
    `;

    if (!InsertProduct[0]) {
      return { success: false, message: "Product insert failed" };
    }

    return {
      success: true,
      message: "Product added successfully",
      product: InsertProduct[0],
    };

  } catch (error) {
    console.log(error);
    return { success: false, message: "Server error" };
  }
} ;

export default AddProductAction;