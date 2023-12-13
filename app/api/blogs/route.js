import { blogsCollection, db } from "@/lib/Firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        // const BlogsQuery = query(messagesCollection, orderBy('created_at'))
        const unsub = await getDocs(blogsCollection)
        const Blogs = unsub.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        return NextResponse.json(
            { Blogs }
            , { status: 200 })
    } catch (error) {
        return new NextResponse({ error })

    }
}