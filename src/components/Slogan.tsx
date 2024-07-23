import { motion } from "framer-motion"
import plate_bg from "/assets/img/plate.jpg"
import steak from "/assets/img/steak.png"
const Slogan = () => {
    const day = new Date().getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
        <div className="h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center space-y-20" style={{ backgroundImage: `url(${plate_bg})` }}>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: .5, ease: "easeIn" }} className="text-6xl lg:text-[150px] uppercase  flex flex-col justify-center items-center text-center font-Montserrat font-extrabold text-shadow text-[#FDD78c] italic lg:mt-52">
                <p className="flex gap-x-5 select-none justify-center items-center">
                    Resto
                    <img src={steak} className="lg:w-32 w-20 object-contain" alt="" />
                </p>
                Khassar</motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: .5, ease: "easeIn" }} className="flex lg:justify-between justify-center items-end w-full h-fit mb-14 px-10">
                <div className="space-y-5">
                    <div className="bg-[#FDD78C] text-[#694909] rounded-md lg:px-5 lg:py-3 flex gap-x-5 justify-between lg:text-2xl text-xl items-center font-Montserrat font-semibold cursor-pointer p-2">
                        <h1 className="">{dayNames[day]}</h1>
                        <p>09:00-22:00</p>
                    </div>
                    <div className="duration-300 gap-x-5 hover:text-[#FDD78C] hover:bg-[#694909] border-2 hover:border-[#694909] lg:text-[#694909] text-[#FDD78C] border-[#FDD78C] cursor-pointer rounded-md lg:px-5 lg:py-3 flex justify-between lg:text-2xl text-xl p-2 items-center font-Montserrat font-semibold">
                        <h1 className="">{day == dayNames.length - 1 ? dayNames[0] : dayNames[day + 1]}</h1>
                        <p>09:00-22:00</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Slogan