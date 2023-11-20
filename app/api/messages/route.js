import { blogsCollection, db, messagesCollection } from "@/lib/Firebase";
import { QuerySnapshot, collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { NextResponse } from "next/server";
export async function GET() {

    try {
        const messagesQuery = query(messagesCollection, orderBy('status'))
        const unsub = await getDocs(messagesQuery)
        const data = unsub.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        return new NextResponse({ error })

    }
}