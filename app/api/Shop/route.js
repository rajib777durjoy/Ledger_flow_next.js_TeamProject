import sql from "@/lib/db.connect";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const clerk_id = searchParams.get("clerk_id");
  const queryUser = await sql`select id from users_table where clerk_id = ${clerk_id} ;`;
  const id = queryUser[0]?.id;
  // console.log('user data',queryUser[0]?.id)
  // const data = await sql`select * from shop_table where user_id <> ${id} ;`;
  // console.log('data',data)
  const data = await sql`select * from shop_table;`;
  console.log('data',data)
  return NextResponse.json(data)
}