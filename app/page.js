import Image from 'next/image'

export default function Home() {
  return (

    <div
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1666214277657-e60f05c40b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='bg-blend-overlay bg-opacity-95 flex flex-col items-center w-full h-[80vh] relative object-cover'>
      <section style={{
        backgroundColor: 'rgba(0,0,0,0.6)'
      }} className='absolute top-0 left-0 w-full h-full  bg-blend-overlay flex flex-col items-center align-middle justify-center'>
        <h1 className='text-5xl w-full text-center  font-extrabold bg-gradient-to-r from-sky-800 via-cyan-400 to-green-300 text-transparent bg-clip-text'>
          Eagle Springs Medical Center
        </h1>

        <p className='text-lg  font-medium text-center'>Optimal, Compassionate, Personalized!</p>
      </section>
    </div>
  )
}
