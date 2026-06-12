import sql from "@/lib/db.connect";
import { NextResponse } from "next/server";
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("clerk_id");
        const result = await sql`SELECT s.id AS shop_id FROM users_table u JOIN shop_table s ON u.id = s.user_id WHERE u.clerk_id = ${id}`;
        const shop_id = result[0]?.shop_id
        const product = await sql`select * from products_table where shop_id = ${shop_id} LIMIT 6 ;`;
        console.log('products details', product)
    console.log('clerk id in route', id);
    return NextResponse.json(product);
}