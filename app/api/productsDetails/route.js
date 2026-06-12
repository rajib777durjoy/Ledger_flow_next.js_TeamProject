import sql from "@/lib/db.connect";
import { NextResponse } from "next/server";

export async function GET(request) {
   const { searchParams } = new URL(request.url);
   const id = searchParams.get('clerk_id');
   const search = searchParams.get("search") || "";
   if (!id) {
      return NextResponse.json({ error: 'Unauthorized user access !!' })
   }
   const [shopdata] = await sql`select s.id from users_table u join shop_table s on u.id = s.user_id where u.clerk_id = ${id} AND u.role ='shopkeeper' ;`;
   console.log('shop id', shopdata?.id)
   const shop_id = shopdata?.id;
   if (!shop_id) {
      return NextResponse.json({ error: 'Shop not found !!' })
   }
   const productData = await sql`
   SELECT * 
   FROM products_table 
   WHERE shop_id = ${shop_id}
   AND (
      product_name ILIKE ${'%' + search + '%'} 
      OR category ILIKE ${'%' + search + '%'}
   );
`;
   console.log('product data:: ', productData)
   return NextResponse.json(productData)
}