import { db } from "@/lib/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";
import { Shoes } from "@/data";
export async function GET() {
    try {
        const ref = collection(db, 'messages')
        const unsub = await getDocs(ref)
        const data = unsub.docs.map((doc) => ({ ...doc.data(), id: doc.id }))


        return NextResponse.json({
            data
        }, { status: 200 })
    } catch (error) {
        return NextResponse({ error })

    }


}