import AnimatedText from '@/components/AnimatedText'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Album, Clock8, Phone } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1666214277657-e60f05c40b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='bg-blend-overlay bg-opacity-95 flex flex-col items-center w-full h-[80vh] relative object-cover mb-8'>
        <section style={{
          backgroundColor: 'rgba(0,0,0,0.7)'
        }} className='absolute top-0 left-0 w-full h-full  bg-blend-overlay flex flex-col items-center align-middle justify-center gap-3'>
          <h1 className='text-5xl w-full text-center  font-extrabold bg-gradient-to-r from-sky-800 via-cyan-400 to-green-300 text-transparent bg-clip-text leading-snug md:leading-loose outline-none '>
            Eagle Springs Medical Center
          </h1>

          <p className='text-xl text-primary p-1  font-semibold outline-none text-center'>
            <AnimatedText />
          </p>


          <aside className='w-full p-2 flex items-center align-middle justify-center gap-4 mt-2'>
            <Button className='bg-lime-600 text-lg font-semibold ring-0 border-0 outline-none' asChild>
              <Link href="/booking">Book Now!</Link>
            </Button>


            <Button variant='link' className=' text-base font-semibold ring-0 border-0 outline-none' asChild >
              <Link href="/services">Our Services</Link>
            </Button>
          </aside>
        </section>
      </div>


      <div className="flex w-full md:p-4 justify-center gap-4 align-middle items-center flex-col md:flex-row h-[70vh] ">

        <section className='h-full w-full md:w-auto  flex-1 relative object-cover object-center  '>
          <Image src={'/monitor.jpg'} fill objectFit='cover' objectPosition='center' alt='monitor loading' className='w-full md:rounded-xl overflow-hidden md:max-h-80 lg:max-h-fit' />
        </section>
        <section className='h-full w-full md:w-auto flex flex-col flex-1 items-center  justify-center p-1 gap-2'>
          <h2 className='text-2xl md:text-4xl text-center w-[75%] font-bold md:leading-loose bg-gradient-to-l from-sky-800 via-cyan-400 to-green-500 text-transparent bg-clip-text '>About us</h2>
          <p className='text-xl  md:text-xl font-[400] md:leading-snug text-justify leading-5 p-3'>
            At Eagle Springs Medical Center, we are more than just a medical center; we are your beacon of hope and health in the heart of Gataka town. Our commitment to your well-being extends across all stages of life, from infancy to adulthood.
          </p>
        </section>

      </div>


      <div className="flex w-full p-4 justify-center gap-4 align-middle items-center flex-col md:flex-row min-h-[50vh]">

        <section className='h-full w-full md:w-auto flex flex-col flex-1 items-center  justify-center p-1 gap-2'>
          <h2 className='text-xl md:text-3xl font-bold leading-loose bg-gradient-to-l from-sky-800 via-cyan-400 to-green-500 text-transparent bg-clip-text '>
            ...More...
          </h2>
          <p className='text-xl font-[400] md:leading-snug text-justify leading-5 p-3'>
            We are more than just a medical center; we are your beacon of hope and health in the heart of Gataka town. Our commitment to your well-being extends across all stages of life, from infancy to adulthood. Located along the picturesque Gataka road in Karen View Estate, we are conveniently positioned to serve the communities of Karen, Ongata Rongai, and Ngong Hills.
          </p>
        </section>

        <section className='h-full w-full md:w-auto flex flex-col flex-1 items-center  justify-center p-1 gap-2'>
          <h2 className='text-xl md:text-3xl font-bold  bg-gradient-to-r from-sky-800 via-cyan-400 to-green-500 text-transparent bg-clip-text '>
            Location
          </h2>

          <aside className='inline-block'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d638.0692148348068!2d36.72661116826049!3d-1.3756757690180226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjInMzIuNSJTIDM2wrA0MyczNi4wIkU!5e1!3m2!1sen!2ske!4v1697483014597!5m2!1sen!2ske" width="300" height="225" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </aside>
        </section>

      </div>

      <div className="w-full flex p-4 justify-center gap-4 align-middle items-center flex-col md:flex-row">
        <Card>
          <CardHeader>
            <CardTitle >
              <Album className='text-sky-900 dark:text-lime-400 ' size={48} strokeWidth={3} />
            </CardTitle>
            <CardDescription>Book Online</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Book an appointment with us by a click of button on our website.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant='primary' className='bg-lime-600 ring-0 outline-none hover:opacity-80'>
              <Link href={'/booking'} >Book Now!</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Phone className='text-sky-900 dark:text-lime-400 ' size={48} strokeWidth={3} />
            </CardTitle>
            <CardDescription>Call Us Now!</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Get on a quick call with us: <span className='text-2xl font-black'>
              25479900220000
            </span></p>
          </CardContent>
          <CardFooter>
            <Button asChild variant='primary' className='bg-lime-600 ring-0 outline-none hover:opacity-80'>
              <a href='tel:2547194844555' className='flex items-center align-middle' >
                Call Now!
              </a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Clock8 className='text-sky-900 dark:text-lime-400' size={48} strokeWidth={3} />
            </CardTitle>
            <CardDescription>Working Hours!</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

      </div>
    </>

  )
}
