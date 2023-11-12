import MessagesHolder from '@/components/Dashboard/MessagesHolder'

const DashBoardMessages = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/messages`, {
        cache: 'no-cache'
    })

    if (!res.ok) {
        throw new Error("fetch error occured")
    }
    const data = await res.json()
    const messagesData = data?.data

    return (
        <div>
            <MessagesHolder messages={messagesData} />
        </div>
    )
}

export default DashBoardMessages