import BookingsLister from '@/components/Dashboard/BookingsLister'

const BookingsPage = async () => {
    return (
        <>

            <h3 className="text-xl font-bold ">Booking Cards </h3>

            <BookingsLister />

        </>
    )
}

export default BookingsPage