import ServiceCard from '@/components/ServiceCard'
import React from 'react'


const services = [
    {
        title: '24-Hour Emergency Department',
        desc: "Life can be unpredictable, and that's why we're here for you around the clock. Our experienced emergency medical team is always ready to provide immediate care when you need it most."
    },
    {
        title: 'Outpatient Center',
        desc: "We offer a comprehensive outpatient center where you can access a wide range of medical services, including consultations and follow-up care."
    },
    {
        title: 'Cancer Screening Center',
        desc: "Your health is our priority. Our specialized cancer screening center is equipped to detect and manage various types of cancer, such as breast cancer, prostate cancer, cervical cancer, and more."
    },
    {
        title: 'Radiology Services',
        desc: "Our state-of-the-art radiology department includes x-ray and ultrasound facilities, ensuring accurate diagnosis and effective treatment planning."
    },
    {
        title: 'Laboratory Investigation Center',
        desc: "Precision in diagnostics is crucial. Our advanced laboratory is equipped with the latest technology to provide accurate test results for timely treatment decisions."
    },
    {
        title: 'Center for Mother-Child Diseases',
        desc: " We understand the unique healthcare needs of mothers and children. Our dedicated center offers specialized care to ensure the well-being of both mothers and their precious little ones."
    },
    {
        title: 'Pharmacy Center',
        desc: "Convenience is key. Our in-house pharmacy ensures that you can quickly access the medications you need to support your recovery."
    },
    {
        title: 'Vascular Science and Screening Center',
        desc: "Your vascular health matters. Our center is dedicated to the prevention, diagnosis, and treatment of vascular conditions."
    },
    {
        title: 'Physical Medicine and Rehabilitation (Physiotherapy)',
        desc: "Our skilled physiotherapists are here to help you regain strength and mobility, facilitating your journey to recovery."
    },
    {
        title: 'Dental Services',
        desc: "A healthy smile is a reflection of overall well-being. We provide comprehensive dental care to ensure your oral health is in top shape."
    },
    {
        title: 'Surgical Procedures',
        desc: "When surgery is required, you can trust our experienced surgical team to provide safe and effective procedures."
    },
    {
        title: 'Maternity Services',
        desc: "Welcoming a new life into the world is a precious moment. Our maternity services provide expectant mothers with comprehensive care and support throughout their pregnancy and delivery."
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


            <div className="w-full p-2 flex align-middle items-center justify-center gap-3 flex-col md:flex-row flex-wrap">

                {
                    services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            Description={service.desc}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Services