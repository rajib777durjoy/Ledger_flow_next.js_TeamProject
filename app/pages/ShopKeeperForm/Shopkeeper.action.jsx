'use server'

import sql from "@/lib/db.connect";
import { auth } from "@clerk/nextjs/server";
import { imagekitUpload } from "@/app/Imagekit/Imagekit";
import { q } from "framer-motion/client";

const BecomeShopkeeperAction = async (formData) => {
    try {
        const { userId: clerk_id } = await auth(); //  Clerk user id

        if (!clerk_id) {
            return { error: "Unauthorized user" };
        }
        const query_user = await sql`select id from users_table where clerk_id = ${clerk_id};`;
        const user_id = query_user?.id;
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

        return { success: true, data: InsertShopDetails[0] };

    } catch (error) {
        console.error(error);
        return { error: error.message };
    }
};

export default BecomeShopkeeperAction;