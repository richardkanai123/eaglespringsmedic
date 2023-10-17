import React from 'react'
import Image from 'next/image'
import { BsFacebook } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BiSolidPhoneCall } from 'react-icons/bi'
import Link from 'next/link'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className=' dark:bg-blue-800 bg-sky-700 text-white w-full flex flex-col items-center shadow-inner'>
            <section className='w-full flex flex-col md:flex-row gap-3  align-middle justify-center md:justify-around p-3'>
                <div className="flex-1 flex  flex-col items-center gap-2 align-middle ">
                    <Image src="/favicon-removebg.png"
                        height={40}
                        width={55}
                        alt='Logo Loading'
                        priority={true}
                    />
                    <h2 className='text-lg font-bold'>Eagle Springs Medical Center</h2>
                    <p className='text-xs italic text-center font-medium '>Your Optimal, Compassionate and Personalized Health Partner.</p>

                    <div className="w-full flex justify-center gap-3 align-middle">
                        <a className='w-10 h-10 text-lg hover:opacity-70 rounded-xl flex items-center align-middle text-center justify-center ' href="http://" target="_blank" rel="noopener noreferrer">
                            <span className='text-sky-600 text-3xl'><BsFacebook /></span>
                        </a>
                        <a className='w-10 h-10 text-lg hover:opacity-70 rounded-xl flex items-center align-middle text-center justify-center ' href="http://" target="_blank" rel="noopener noreferrer">
                            <span className='text-lime-600 text-3xl'><IoLogoWhatsapp /></span>
                        </a>
                        <a className='w-10 h-10 text-lg hover:opacity-70 rounded-xl flex items-center align-middle text-center justify-center ' href="http://" target="_blank" rel="noopener noreferrer">
                            <span className='text-yellow-600 text-3xl'><BiSolidPhoneCall /></span>
                        </a>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center align-middle gap-2 ">
                    <h2 className='w-full text-lg font-bold text-center underline'>Services</h2>
                    <section className="w-full flex align-middle justify-evenly font-medium  items-center p-1">
                        <aside>
                            <p>Out-Patient</p>
                            <p>In-Patient</p>
                            <p>Radiology</p>
                            <p>Dental</p>
                            <p>Pharmacy</p>
                            <p>Physiotherapy</p>
                        </aside>
                        <aside>
                            <p>MCH</p>
                            <p>Maternity</p>
                            <p>Post-Natal Care</p>
                            <p>Gynecology</p>
                            <p>VCT</p>
                            <p>Trauma</p>
                        </aside>
                    </section>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2 align-middle ">
                    <h2 className='w-full text-lg font-bold text-center underline'>Recent Blogs</h2>
                    <p>TBA</p>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2 align-middle">
                    <h2 className='w-full text-lg font-light text-center underline'>Quick Links</h2>
                    <section className="w-full text-center flex flex-col items-center align-middle">
                        <Link className='text-base hover:italic hover:underline' href={'/'}>
                            Home
                        </Link>
                        <Link className='text-base hover:italic hover:underline' href={'/booking'}>
                            Book Now
                        </Link>
                        <Link className='text-base hover:italic hover:underline' href={'/services'}>
                            Our Services
                        </Link>
                        <Link className='text-base hover:italic hover:underline' href={'/blog'}>
                            Our Blog
                        </Link>
                        <Link className='text-base hover:italic hover:underline' href={'/contact'}>
                            Contact us
                        </Link>
                    </section>
                </div>
            </section>


            <div className="w-full dark:bg-sky-950 p-1 text-center text-base font-normal mt-4">
                <p className='w-full flex items-center gap-1 text-center'>
                    <AiOutlineCopyrightCircle /> eaglespring medical center {new Date().getFullYear()}
                </p>
            </div>
        </div>
    )
}

export default Footer