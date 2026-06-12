'use server'

import sql from "@/lib/db.connect";
import { auth } from "@clerk/nextjs/server";
import { imagekitUpload } from "@/app/Imagekit/Imagekit";


const BecomeShopkeeperAction = async (formData) => {
  try {
    const { userId: clerk_id } = await auth(); //  Clerk user id
    // console.log('clerk id:;', clerk_id)
    if (!clerk_id) {
      return { error: "Unauthorized user" };
    }
    const [user] = await sql`SELECT id FROM users_table
  WHERE clerk_id = ${clerk_id};
`;
    const user_id = user?.id;
    if (!user_id) {
      return { message: 'user id is not found !!' }
    }
    const shopExist = await sql`select * from shop_table where user_id = ${user_id} ;`;
    if(shopExist.length > 0){
    return 'already have a shop '
    }
    const data = Object.fromEntries(formData.entries());
    console.log('data', data);

    const file = formData.get('image');

    const uploadResult = await imagekitUpload(file);
    const imageUrl = uploadResult?.url;

    if (!imageUrl) {
      return { error: "Image upload failed" };
    }
    const { Shop_name, Owner_name, phone, address, description } = data || {};

    const InsertShopDetails = await sql`
      INSERT INTO shop_table 
        (shop_name, owner_name, shop_image, address, phone, description, user_id)
      VALUES 
        (${Shop_name}, ${Owner_name}, ${imageUrl}, ${address}, ${phone}, ${description}, ${user_id})
      RETURNING *;
    `;
    if (InsertShopDetails.length > 0) {
      await sql`
    UPDATE users_table
    SET role = 'shopkeeper'
    WHERE clerk_id = ${clerk_id}
  `;
    }

    return { message: "Shop created & role updated successfully!", };

  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

export default BecomeShopkeeperAction;