import sql from "@/lib/db.connect";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('shop_id');
    const queryShopProduct = await sql` SELECT 
    s.id as shop_id,
    s.shop_name,
    s.shop_image,
    s.address,
    s.phone,
    p.id as product_id,
    p.product_name,
    p.price,
    p.quantity
  FROM shop_table s
  JOIN products_table p 
  ON s.id = p.shop_id where s.id = ${id}
` ;
console.log('shop_product',queryShopProduct)
if(queryShopProduct.length === 0){
    return NextResponse.json({error:'shop product is not found !!'})
}
return NextResponse.json(queryShopProduct)
}