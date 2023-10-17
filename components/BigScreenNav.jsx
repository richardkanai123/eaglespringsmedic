import { BsFillTelephoneForwardFill } from 'react-icons/bs'
import { FcHome, FcServices, FcBookmark, FcContacts } from 'react-icons/fc'
import { FaBlog } from 'react-icons/fa'
import Link from 'next/link'


const navlinks = [
    {
        tag: '/',
        name: "Home",
        Icon: <FcHome />
    },
    {
        tag: '/services',
        name: "Services",
        Icon: <FcServices />
    },
    {
        tag: '/blog',
        name: "Blog",
        Icon: <FaBlog />
    },
    {
        tag: '/booking',
        name: "Book",
        Icon: <FcBookmark />
    },
    {
        tag: '/contact',
        name: "Contact",
        Icon: <FcContacts className='hover:bg-cyan-300' />
    },
]


const BigScreenNav = () => {
    return (
        <nav className=" items-center justify-center gap-2 p-1 text-center hidden lg:flex ">
            {
                navlinks.map((link) => (
                    <Link className="w-full font-bold  hover:text-cyan-400 hover:shadow-lg focus:bg-cyan-300 active:bg-cyan-300  p-1 text-lg flex items-center align-middle gap-1 " key={link.name} href={link.tag}>
                        {link.Icon}

                        {link.name}
                    </Link>
                ))
            }
        </nav>
    )
}

export default BigScreenNav