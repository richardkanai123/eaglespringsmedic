import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export const getMessages = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/messages`)

    if (!res.ok) {
        throw new Error("fetch error occured")
    }
    const data = await res.json()
    console.log(data);
    return data
}


// email js
export const SendEmail = async (name, date, time, dept, email) => {
    try {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILKEY)

        await emailjs.send("service_pyp9kvm", "template_tmx3n3y", {
            receiver_name: name,
            booking_date: date,
            booking_time: time,
            booking_dept: dept,
            Website: process.env.NEXT_PUBLIC_BASEURL,
            from_name: "ESMC Admin",
            To_email: email
        })
            .then(() => console.log('email sent'))
    } catch (error) {
        toast.error(error.message)
        console.log(error)
    }

}
