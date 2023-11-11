import { blogsCollection, db, messagesCollection } from "@/lib/Firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { NextResponse } from "next/server";
import { Shoes } from "@/data";
export async function GET() {
    try {
        // const messagesQuery = query(messagesCollection, orderBy('status'))
        const unsub = await getDocs(messagesCollection)
        const res = unsub.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        const data = res
        console.log(res)
        return NextResponse.json({
            data
        }, { status: 200 })
    } catch (error) {
        return NextResponse({ error })

    }


}