import sql from "@/lib/db.connect";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const clerk_id = searchParams.get('id');
    if (!clerk_id) {
        return NextResponse.json({ error: 'clerk id is not found !' })
    }
    const ExistUser = await sql`select * from users_table where clerk_id = ${clerk_id} and role ='customer' ;`;
    if (ExistUser.length === 0) {
        return NextResponse.json({ error: 'customer is not found !' })
    }
    const cus_id = ExistUser[0].id;
    //    const shop_wise_DueList= await sql`select S.shop_name,S.address,S.shop_image,S.phone,CD.total_due,CD.created_at from customer_due_table CD join shop_table S on CD.shop_id = S.id where CD.cus_id=${cus_id} ;`;
    const shop_wise_DueList = await sql`
SELECT 
  S.id AS shop_id,
  S.shop_name,
  S.address,
  S.shop_image,
  S.phone,

  SUM(CD.total_due) AS total_due,
  MAX(CD.created_at) AS last_due_date

FROM customer_due_table CD
JOIN shop_table S ON CD.shop_id = S.id

WHERE CD.cus_id = ${cus_id}

GROUP BY 
  S.id,
  S.shop_name,
  S.address,
  S.shop_image,
  S.phone

ORDER BY total_due DESC;
`;

    console.log('shop wise data::', shop_wise_DueList)
    return NextResponse.json(shop_wise_DueList || [])

}