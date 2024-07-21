import { Fade } from "react-awesome-reveal"
import tomato from "/assets/img/tomato.png"
import steak from "/assets/img/steak.png"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

const Footer = () => {
    const schedule = [
        {
            day: "monday",
            time: "11:00-21:00"
        },
        {
            day: "tuesday",
            time: "11:00-21:00"
        },
        {
            day: "wednesday",
            time: "11:00-21:00"
        },
        {
            day: "thursday",
            time: "11:00-21:00"
        },
        {
            day: "friday",
            time: "09:00-22:00"
        },
        {
            day: "saturday",
            time: "09:00-22:00"
        },
        {
            day: "sunday",
            time: "11:00-21:00"
        }
    ]
    return (
        <div className="-mt-6 overflow-hidden rounded-t-3xl bg-[#1D1D1D] w-full px-16 py-20 text-white space-y-20 relative bottom-0 flex justify-center items-center">
            <div className="flex lg:flex-row flex-col justify-between items-start lg:gap-56 gap-32 w-full">
                <div className="lg:space-y-80 space-y-10 lg:w-1/2">
                    <div className="lg:space-y-20 space-y-8">
                        <Fade cascade direction="down">
                            <div className="space-y-7">
                                <h1 className="font-Montserrat uppercase font-black lg:text-5xl text-3xl italic flex items-end gap-x-4 text-[#FDD78C] z-50 duration-700">rstkhassar<img src={steak} className="lg:w-10 hidden lg:block object-contain" alt="" /><img src={tomato} className="w-7 lg:hidden block object-contain" alt="" /></h1>
                                <ul className="flex lg:flex-row flex-col gap-7">
                                    <li className="flex gap-x-2 font-Montserrat lg:font-medium font-semibold lg:text-base text-sm items-center"><Mail className="size-5" />booking@RSTKHASSAR.com</li>
                                    <li className="flex gap-x-2 font-Montserrat font-medium"><Phone className="size-5" />+212664945127</li>
                                </ul>
                            </div>
                            <button className="lg:px-5 lg:py-3 px-3 py-2 lg:text-base text-sm border border-[#FDD78C] rounded-md font-Montserrat font-semibold capitalize hover:bg-[#FDD78C] hover:text-[#664b14] text-[#FDD78C] duration-300">book online</button>
                        </Fade>
                    </div>
                    <ul className="flex items-center gap-x-5 w-full">
                        <Fade cascade>
                            <li className="border-2 border-white rounded-full p-2 cursor-pointer hover:bg-slate-500/50 duration-300"><Facebook /></li>
                            <li className="border-2 border-white rounded-full p-2 cursor-pointer hover:bg-slate-500/50 duration-300"><Instagram /></li>
                            <li className="border-2 border-white rounded-full p-2 cursor-pointer hover:bg-slate-500/50 duration-300"><Linkedin /></li>
                        </Fade>
                    </ul>
                </div>
                <div className="space-y-10 w-full">
                    <div className="flex lg:flex-row flex-col-reverse gap-20 w-full ">
                        <Fade cascade className="w-full">
                            <div className="lg:w-1/2 h-full space-y-10">
                                <h1 className="text-4xl font-Montserrat font-semibold capitalize">menu</h1>
                                <ul className="space-y-12 text-slate-400">
                                    <li className="text-xl font-Montserrat font-semibold">About</li>
                                    <li className="text-xl font-Montserrat font-semibold">Menu</li>
                                    <li className="text-xl font-Montserrat font-semibold">Contact Us</li>
                                </ul>
                            </div>
                            <div className="w-1/2 h-full space-y-10">
                                <h1 className="text-4xl font-Montserrat font-semibold capitalize">others</h1>
                                <ul className="space-y-12 text-slate-400">
                                    <li className="text-xl font-Montserrat font-semibold">Terms of Service</li>
                                    <li className="text-xl font-Montserrat font-semibold">Policy service</li>
                                    <li className="text-xl font-Montserrat font-semibold">Cookie Policy</li>
                                    <li className="text-xl font-Montserrat font-semibold">Partners</li>
                                </ul>
                            </div>
                            <div className="space-y-10">
                                <h1 className="text-4xl font-Montserrat font-semibold capitalize">open at</h1>
                                <div className="space-y-5">
                                    {schedule.map((item, index) => (
                                        <div key={index} className="space-y-4 text-lg font-Montserrat font-medium text-slate-400">
                                            <div className="flex justify-between font-Montserrat font-medium">
                                                <span className="capitalize">{item.day}</span>
                                                <span>{item.time}</span>
                                            </div>
                                            <hr className="border border-slate-500" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <Fade className="sm:flex flex-col justify-center items-end h-full relative -bottom-5">
                        <small className="lg:float-end text-lg text-gray-300 capitalize font-Montserrat font-semibold">&#169; RSTKHASSAR. all rights reserved</small>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Footer