import sql from "@/lib/db.connect";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const ExistingUser= await sql`select * from users_table where email = ${data?.emailAddresse} ;`;
  if(ExistingUser.length > 0){
    return NextResponse.json(ExistingUser[0])
  }
  const insertUser= await sql`insert into users_table(fullname,profile,email) values(${data?.fullname},${data?.imageUrl},${data?.emailAddresse}) RETURNING * ;`;
  if(insertUser.length === 0){
   return NextResponse.json({message:'User SignUp failed !!'})
  }
  console.log('data',data)
  return NextResponse.json({ message: " User Sign Up successfull !" });
}