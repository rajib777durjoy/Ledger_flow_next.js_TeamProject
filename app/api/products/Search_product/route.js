import sql from "@/lib/db.connect";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('searchQuery');
    const searchProduct = await sql`select * from products_table where product_name ILIKE ${'%' + query + '%'} OR category ILIKE ${'%' + query + '%'}`;
    console.log(searchProduct);
    if(searchProduct.length === 0){
        return NextResponse.json([])
    }
    return NextResponse.json(searchProduct);
}