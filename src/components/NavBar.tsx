import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
const NavBar = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [scrolled, setScrolled] = useState(false);

    const navBarToggle = () => {
        setIsOpened(!isOpened)
    }



    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 990) {
                setIsOpened(false);
            }
        });
        return () => window.removeEventListener('resize', () => {
            if (window.innerWidth >= 990) {
                setIsOpened(false);
            }
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="lg:backdrop-blur-md fixed top-0 w-full py-5 px-10 lg:bg-transparent flex items-center justify-between z-50">
            <motion.h1 initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeIn", duration: 1 }} className={`font-Montserrat uppercase font-black text-3xl italic ${!scrolled ? "text-slate-700" : "text-[#FDD78C]"} z-50 duration-700`}>rstkhassar</motion.h1>
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 2 }} className={`lg:flex ${isOpened ? "backdrop-blur-md navbar-animation bg-black/20 flex flex-col fixed w-full h-[95vh] left-0 top-[4.75rem] py-32 px-10 justify-center lg:justify-start items-center" : "hidden"} capitalize lg:flex items-center gap-5 ${!scrolled ? 'lg:text-slate-700' : "text-[#FDD78C]"} text-[#FDD78C] font-Montserrat font-bold duration-300`}>
                <li className="lg:text-base text-2xl  underline-thick p-2 cursor-pointer"><a href="">about</a></li>
                <li className="lg:text-base text-2xl underline-thick p-2 cursor-pointer"><a href="">menu</a></li>
                <li className="lg:text-base text-2xl underline-thick p-2 cursor-pointer"><a href="">contact us</a></li>
                <li className={`lg:text-base text-xl lg:p-2 p-3 ${!scrolled && "lg:hover:bg-slate-500 lg:border-slate-500"} border-2 hover:bg-[#FDD78C] cursor-pointer border-[#FDD78C] hover:text-slate-500 lg:hover:text-white rounded-md duration-300`}><a href="">book online</a></li>
            </motion.ul>
            <div className="lg:hidden z-50">
                {isOpened ? <X size={35} onClick={navBarToggle} className={`${!scrolled ? " stroke-slate-700" : "stroke-[#FDD78C]"} cursor-pointer duration-300`} /> : <Menu size={35} onClick={navBarToggle} className={`${!scrolled ? " stroke-slate-700" : "stroke-[#FDD78C]"} cursor-pointer duration-300`} />}
            </div>
        </div >
    )
}

export default NavBar