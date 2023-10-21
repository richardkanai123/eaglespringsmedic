import ServiceCard from '@/components/ServiceCard'
import { Baby, HeartPulse, Pill, Stethoscope, Syringe } from 'lucide-react'
import { AiFillSecurityScan } from 'react-icons/ai'
import { FaHospitalSymbol, FaHospitalUser, FaTooth } from 'react-icons/fa'
import { TbMicroscope } from 'react-icons/tb'
import { GiMedicines } from 'react-icons/gi'
import { BiSolidBabyCarriage } from 'react-icons/bi'
export const metadata = {
    title: 'Eagle Springs Medical Center Services',
    description: 'Services offered at Eagle Springs Medical Center Services.',
}

const services = [
    {
        title: '24-Hour Emergency Department',
        desc: "Life can be unpredictable, and that's why we're here for you around the clock. Our experienced emergency medical team is always ready to provide immediate care when you need it most.",
        icon: <FaHospitalSymbol className='text-red-400 text-3xl' />
    },
    {
        title: 'Outpatient Center',
        desc: "We offer a comprehensive outpatient center where you can access a wide range of medical services, including consultations and follow-up care.",
        icon: <FaHospitalUser className='text-lime-400 text-3xl' />
    },
    {
        title: 'Cancer Screening Center',
        desc: "Your health is our priority. Our specialized cancer screening center is equipped to detect and manage various types of cancer, such as breast cancer, prostate cancer, cervical cancer, and more.",
        icon: <AiFillSecurityScan className='text-lime-400 text-3xl' />
    },
    {
        title: 'Radiology Services',
        desc: "Our state-of-the-art radiology department includes x-ray and ultrasound facilities, ensuring accurate diagnosis and effective treatment planning.",
        icon: <Stethoscope className='text-lime-400 text-3xl' />

    },
    {
        title: 'Laboratory Investigation Center',
        desc: "Precision in diagnostics is crucial. Our advanced laboratory is equipped with the latest technology to provide accurate test results for timely treatment decisions.",
        icon: <TbMicroscope className='text-yellow-300 text-3xl' />

    },
    {
        title: 'Center for Mother-Child Diseases',
        desc: " We understand the unique healthcare needs of mothers and children. Our dedicated center offers specialized care to ensure the well-being of both mothers and their precious little ones.",
        icon: <Baby className='text-green-300 text-3xl' />

    },
    {
        title: 'Pharmacy Center',
        desc: "Convenience is key. Our in-house pharmacy ensures that you can quickly access the medications you need to support your recovery.",
        icon: <Pill className='text-red-400 text-3xl' />

    },
    {
        title: 'Vascular Science and Screening Center',
        desc: "Your vascular health matters. Our center is dedicated to the prevention, diagnosis, and treatment of vascular conditions.",
        icon: <HeartPulse className='text-lime-400 text-3xl' />

    },
    {
        title: 'Physical Medicine and Rehabilitation (Physiotherapy)',
        desc: "Our skilled physiotherapists are here to help you regain strength and mobility, facilitating your journey to recovery.",
        icon: <GiMedicines className='text-red-600 text-3xl' />

    },
    {
        title: 'Dental Services',
        desc: "A healthy smile is a reflection of overall well-being. We provide comprehensive dental care to ensure your oral health is in top shape.",
        icon: <FaTooth className='text-lime-400 text-3xl' />

    },
    {
        title: 'Surgical Procedures',
        desc: "When surgery is required, you can trust our experienced surgical team to provide safe and effective procedures.",
        icon: <Syringe className='text-rose-400 text-3xl' />
    },
    {
        title: 'Maternity Services',
        desc: "Welcoming a new life into the world is a precious moment. Our maternity services provide expectant mothers with comprehensive care and support throughout their pregnancy and delivery.",
        icon: <BiSolidBabyCarriage className='text-green-500 text-3xl' />
    },
]

const Services = () => {
    return (

        <div
            className='w-full flex flex-col items-center align-middle  max-h-fit'
        >
            <h1 className='text-4xl mt-3 mb-2 w-full text-center  font-extrabold bg-gradient-to-r from-sky-800 via-cyan-400 to-green-300 text-transparent bg-clip-text leading-snug md:leading-loose outline-none '>
                Our Services
            </h1>


            <p className=' text-accent-foreground text-center text-lg md:text-xl font-semibold p-2 w-full md:w-[70%] lg:w-[75%] '>
                Choose Eagle Springs Medical Center for compassionate care, cutting-edge technology, and a commitment to your health. Your well-being is our top priority, and we are here to support you every step of the way. Visit us today!.</p>

            <p className=' text-accent-foreground text-center text-lg md:text-xl font-semibold'> Visit us today!</p>
            <div className="w-full p-2 flex align-middle items-center justify-center gap-3 flex-col md:flex-row flex-wrap">

                {
                    services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            Description={service.desc}
                            Icon={service.icon}
                        />
                    ))
                }
            </div>

        </div>

    )
}

export default Services