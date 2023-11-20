export const getMessages = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/messages`,
        {
            cache: 'no-cache',

        })

    if (!res.ok) {
        throw new Error("fetch error occured")
    }
    const data = await res.json()
    return data
}