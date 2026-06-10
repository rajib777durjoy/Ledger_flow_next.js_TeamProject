import sql from "@/lib/db.connect";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const shop_id = searchParams.get('shop_id');
  console.log('id', id, shop_id);
  const queryProduct = await sql`
  SELECT *
  FROM products_table
  WHERE id = ${id}
  AND shop_id = ${shop_id};`;
  console.log('query product ', queryProduct[0]);
  if (queryProduct.length === 0) {
    return NextResponse.json({ error: 'product not found !' })
  }
  return NextResponse.json(queryProduct[0])
}

export async function PUT(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const shop_id = searchParams.get('shop_id');
  console.log('id', id, shop_id);
  const { price, quantity, category, description } = await request.json();

  const updateProduct = await sql`
  UPDATE products_table SET price = ${price}, quantity = ${quantity}, category = ${category},
  description = ${description}
  WHERE id = ${id}
  AND shop_id = ${shop_id}
  RETURNING *;
`;
console.log('updateProduct ',updateProduct)
if(updateProduct.length === 0){
  return NextResponse.json({error:'product update failed !!'})
}
return NextResponse.json(updateProduct[0])
}