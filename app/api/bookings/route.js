import { BookingsCollection, db } from "@/lib/Firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { NextResponse } from "next/server";
import { Shoes } from "@/data";
export async function GET() {
    try {
        const BookingsQuery = query(BookingsCollection, orderBy('status', "desc"))
        const unsub = await getDocs(BookingsCollection)
        const data = unsub.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        return NextResponse.json(
            data
            , { status: 200 })
    } catch (error) {
        return new NextResponse({ error })

    }
}