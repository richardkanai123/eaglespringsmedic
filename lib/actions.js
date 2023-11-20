'use server'
import { messagesCollection, db } from "@/lib/Firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
export async function getMessages() {

    try {
        const BookingsQuery = query(messagesCollection, orderBy("time", 'desc'))
        const unsub = await getDocs(messagesCollection)
        const res = unsub.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        const data = res
        return data
    } catch (error) {
        throw new Error("Fetching error")
        return error.message

    }
}
