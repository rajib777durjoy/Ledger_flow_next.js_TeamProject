import sql from "@/lib/db.connect";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const clerk_id = searchParams.get("clerk_id");
  const queryUser = await sql`select id from users_table where clerk_id = ${clerk_id} ;`;
  const id = queryUser[0]?.id;
  if (!id) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    );
  }
  console.log('user data', queryUser[0]?.id)
  const data = await sql`select * from shop_table where user_id = ${id} ;`;
  console.log('shop data ', data)
  return NextResponse.json(data[0])
}

export async function POST(request) {
  const data = await request.json();
  console.log('client data action', data);
  const clerk_id = data?.cus_id; // clerk id 
  const shop_id = data?.shop_id; // shop_id 
  const amount = data?.amount; // Due amount 
  const paymentStatus = data?.paymentStatus; // paymentStatus like paymentDue OR fullpayment
  const cus_phone = data?.cus_phone; // Customer Phone  
  const product_info = data?.productIdAndQuantity; // here is product_id,quantity,price //
  console.log("client Data::", shop_id, cus_phone, product_info, paymentStatus);
  const userQuery = await sql`select * from users_table where clerk_id = ${clerk_id} AND role ='customer' ;`;
  if (userQuery.length === 0) {
    return NextResponse.json({ error: 'user is not found !' })
  }
  const cus_id = userQuery[0].id;
  await Promise.all(
    product_info.map(async (item) => {
      console.log('item', item)
      await sql`
          INSERT INTO sales_table (
            cus_id,
            product_id,
            quantity,
            total
          )
          VALUES (
            ${cus_id},
            ${item.productId},
            ${item.quantity},
            ${item.price}
          )
         
        `;
    })
  );
  if (paymentStatus === 'paymentDue') {
    const insertDuePayment = await sql`INSERT INTO customer_due_table (
    shop_id,
    cus_id,
    cus_phone,
    total_due
  )
  VALUES (
    ${shop_id},
    ${cus_id},
    ${cus_phone},
    ${amount}
  )
  RETURNING *
`;
    if (insertDuePayment.length === 0) {
      return NextResponse.json({ error: 'Insert Due failed !!' })
    }
    return NextResponse.json({ success: true, message: 'sales inserted and due inserted successfull' })
  }

  return Response.json({
    success: true,
    message: 'Sales inserted successfully'
  });
}