
import sql from "@/lib/db.connect";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
export async function POST(req) {
  const data = await req.json();
  const { userId:clerk_id } = await auth();
  const ExistingUser= await sql`select * from users_table where clerk_id = ${clerk_id} ;`;
  if(ExistingUser.length > 0){
    return NextResponse.json(ExistingUser[0])
  }
  const insertUser= await sql`insert into users_table(fullname,profile,email,clerk_id) values(${data?.fullname},${data?.imageUrl},${data?.emailAddresse},${clerk_id}) RETURNING * ;`;
  if(insertUser.length === 0){
   return NextResponse.json({message:'User SignUp failed !!'})
  }
  console.log('data',data)
  return NextResponse.json({ message: " User Sign Up successfull !" });
}