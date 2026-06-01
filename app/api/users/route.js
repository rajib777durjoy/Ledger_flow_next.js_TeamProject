import sql from "@/lib/db.connect";
import { NextResponse } from "next/server";


export async function POST(req) {
  const data = await req.json();
  const clerk_id = data?.id
  console.log('clerk id :::',clerk_id)
  if(!clerk_id){
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const ExistingUser= await sql`select * from users_table where clerk_id = ${clerk_id} ;`;
  // console.log('user exist',ExistingUser)
  if(ExistingUser.length > 0){
    return NextResponse.json(ExistingUser[0])
  }
  const insertUser= await sql`insert into users_table(fullname,profile,email,clerk_id) values(${data?.fullname},${data?.imageUrl},${data?.emailAddresse},${clerk_id}) RETURNING * ;`;
  if(insertUser.length === 0){
   return NextResponse.json({message:'User SignUp failed !!'})
  }
  // console.log('data',data)
  return NextResponse.json({ message: " User Sign Up successfull !" });
}