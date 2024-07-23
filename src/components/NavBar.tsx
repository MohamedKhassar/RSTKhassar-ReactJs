import { Menu, X } from "lucide-react"
import tomato from "/assets/img/tomato.png"
import steak from "/assets/img/steak.png"
import { useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal"
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
        <div className={`lg:backdrop-blur-md duration-300 fixed top-0 w-full py-5 px-10 lg:bg-black/5 ${scrolled ? "bg-slate-700" : "bg-[#FDD78C]"} flex items-center justify-between z-20`}>
            <Fade direction="down">
                <h1 className={`font-Montserrat uppercase font-black lg:text-3xl text-xl italic flex items-end gap-x-4 ${!scrolled ? "text-slate-700" : "text-[#FDD78C]"} z-50 duration-700`}>rstkhassar<img src={steak} className="lg:w-10 hidden lg:block object-contain" alt="" /><img src={tomato} className="w-7 lg:hidden block object-contain" alt="" /></h1>
            </Fade>
            <Fade cascade direction="down">
                <ul className={`select-none lg:flex  ${isOpened ? "navbar-animation flex flex-col fixed w-full h-[95vh] left-0 top-[4.2rem] py-32 px-10 justify-center lg:justify-start items-center bg-black/20 backdrop-blur-md" : "hidden"} capitalize lg:flex items-center gap-5 ${!scrolled ? 'lg:text-slate-700' : "text-[#FDD78C]"} text-[#FDD78C] font-Montserrat font-bold duration-300`}>
                    <li className="lg:text-base text-2xl  underline-thick p-2 cursor-pointer" onClick={() => scrollTo(0, Number(document.getElementById("about")?.offsetTop))}>about</li>
                    <li className="lg:text-base text-2xl underline-thick p-2 cursor-pointer" onClick={() => scrollTo(0, Number(document.getElementById("menu")?.offsetTop))}>menu</li>
                    <li className="lg:text-base text-2xl underline-thick p-2 cursor-pointer" onClick={() => scrollTo(0, Number(document.getElementById("reviews")?.offsetTop))}>reviews</li>
                    <li className={`lg:text-base text-xl lg:p-2 p-3 ${!scrolled && "lg:hover:bg-slate-500 lg:border-slate-500"} border-2 hover:bg-[#FDD78C] cursor-pointer border-[#FDD78C] hover:text-slate-500 lg:hover:text-white rounded-md duration-300`}>book online</li>
                </ul>
            </Fade>
            <div className="lg:hidden z-50">
                {isOpened ? <X onClick={navBarToggle} className={`${!scrolled ? " stroke-slate-700" : "stroke-[#FDD78C]"} cursor-pointer duration-300`} /> : <Menu onClick={navBarToggle} className={`${!scrolled ? " stroke-slate-700" : "stroke-[#FDD78C]"} cursor-pointer duration-300`} />}
            </div>
        </div >
    )
}

export default NavBar