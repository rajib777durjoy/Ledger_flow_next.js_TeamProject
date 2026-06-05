import sql from "@/lib/db.connect";
import { NextResponse } from "next/server";

export async function GET(request){
const {searchParams}= new URL(request.url);
const id = searchParams.get('id'); // get clerk id from query params ;
if(!id){
    return NextResponse.json({error:'Unauthorized user access !!'})
}
const customerData = await sql`select * from users_table where clerk_id = ${id} AND role = 'customer';`;
if(customerData.length === 0){
    return NextResponse.json({error:'customer not found !!'})
}
console.log('customer data in ', customerData);
const cus_id = customerData[0]?.id;
const purchaseData = await sql`SELECT * FROM sales_table WHERE customer_id = ${cus_id}`;
console.log('purchase data in', purchaseData);
return NextResponse.json({ purchaseData });
}