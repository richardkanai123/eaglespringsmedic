import AnimatedText from '@/components/AnimatedText'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
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
          <Image src={'/monitor.jpg'} fill objectFit='cover' objectPosition='center' alt='monitor loading' className='w-full md:rounded-xl overflow-hidden' />
        </section>
        <section className='h-full w-full md:w-auto flex flex-col flex-1 items-center  justify-center p-1 gap-2'>
          <h2 className='text-2xl md:text-4xl text-center w-[75%] font-bold md:leading-loose bg-gradient-to-l from-sky-800 via-cyan-400 to-green-500 text-transparent bg-clip-text '>About Eagle Springs Medical Center</h2>
          <p className='text-xl  md:text-xl font-[400] md:leading-snug text-justify leading-5 p-3'>
            At Eagle Springs Medical Center, we are more than just a medical center; we are your beacon of hope and health in the heart of Gataka town. Our commitment to your well-being extends across all stages of life, from infancy to adulthood.
          </p>
        </section>

      </div>


      <div className="flex w-full p-4 justify-center gap-4 align-middle items-center flex-col md:flex-row h-[50vh]">

        <section className='h-full w-full md:w-auto flex flex-col flex-1 items-center  justify-center p-1 gap-2'>
          <h2 className='text-xl md:text-3xl font-bold leading-loose bg-gradient-to-l from-sky-800 via-cyan-400 to-green-500 text-transparent bg-clip-text '>
            ...More...
          </h2>
          <p className='text-xl font-[400] md:leading-snug text-justify leading-5 p-3'>
            We are more than just a medical center; we are your beacon of hope and health in the heart of Gataka town. Our commitment to your well-being extends across all stages of life, from infancy to adulthood. Located along the picturesque Gataka road in Karen View Estate, we are conveniently positioned to serve the communities of Karen, Ongata Rongai, and Ngong Hills.
          </p>
        </section>

        <section className='h-full w-full md:w-auto  flex-1 relative object-cover '>
          <h2 className='text-xl md:text-3xl font-bold  bg-gradient-to-r from-sky-800 via-cyan-400 to-green-500 text-transparent bg-clip-text '>
            Location
          </h2>
        </section>

      </div>
    </>

  )
}
