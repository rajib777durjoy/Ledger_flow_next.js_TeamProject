'use server'
import { imagekitUpload } from "@/app/Imagekit/Imagekit";
import sql from "@/lib/db.connect";

const AddProductAction = async (formData) => {
    const data = Object.fromEntries(formData.entries());
    const file = formData.get('image');
    const uploadResult = await imagekitUpload(file);
    const imageUrl = uploadResult.url;
    
    if (!imageUrl) {
        return;
    }
    console.log(imageUrl)
    const { product_name, description, price, quantity, unity, category } = data || {}
    console.log('data', data)
    const InsertProduct = await sql`
  INSERT INTO products_table 
    (shop_id, product_name, price, quantity, unity, description, category, image_url)
  VALUES 
    (${1}, ${product_name}, ${price}, ${quantity}, ${unity}, ${description}, ${category}, ${imageUrl})
  RETURNING *;
`;
    if (InsertProduct.length === 0) {
        return {
            'message': 'InsertProduct failed successfully !'
        }
    }

    return { 'success': 'data submit successfull' }
};

export default AddProductAction;