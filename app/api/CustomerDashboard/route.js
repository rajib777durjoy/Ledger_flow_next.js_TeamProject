
import sql from "@/lib/db.connect";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const customerData = await sql`
    SELECT * FROM users_table 
    WHERE clerk_id = ${id} AND role = 'customer';
  `;

  if (customerData.length === 0) {
    return NextResponse.json({ error: 'user not found' }, { status: 404 });
  }

  return NextResponse.json(customerData[0]); 
}