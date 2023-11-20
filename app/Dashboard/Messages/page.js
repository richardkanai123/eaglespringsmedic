import MessagesHolder from '@/components/Dashboard/MessagesHolder'

const DashBoardMessages = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/messages`, {
        cache: 'no-store'
    })

    if (!res.ok) {
        throw new Error("fetch error occured")
    }
    const data = await res.json()


    return (
        <div>
            <MessagesHolder messages={data} />
        </div>
    )
}

export default DashBoardMessages