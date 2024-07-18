import Carousel from "./Carousel";
import image_1 from "/assets/img/1.jpg"
import image_2 from "/assets/img/2.jpg"
import image_3 from "/assets/img/3.jpg"
import { EmblaOptionsType } from "embla-carousel"
const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDES = [
    image_1,
    image_2,
    image_3,
]


const WelcomeSection = () => {
    return (
        <div className="z-0 lg:h-screen h-fit bg-slate-700 flex flex-col lg:space-y-20 space-y-10 justify-start items-center">
            <Carousel slides={SLIDES} options={OPTIONS} />
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="text-[#FDD78C] font-Montserrat lg:text-2xl text-sm font-bold lg:w-1/2 w-[80%] lg:text-center text-justify">
                Welcome to Resto Kayang, your destination for authentic Moroccan cuisine. Enjoy a culinary journey with dish<span className="opacity-50">es like savory tagine and delightful couscous. Join us for a memorable dining experience where tradition meets taste.</span>
            </p>
            <hr className="bg-[#FDD78C] w-[90%] h-1 rounded-md" />
            <div data-aos="fade-down"
                data-aos-anchor-placement="bottom-bottom" className="flex flex-col lg:flex-row justify-center items-start pb-10 lg:gap-x-56 gap-y-10">
                <p className="text-[#FDD78C] flex items-center gap-x-2 lg:text-3xl text-xl"><span className="lg:text-5xl text-2xl font-Montserrat font-bold">10,000+</span> Satisfied Customers</p>
                <p className="text-[#FDD78C] flex items-center gap-x-2 lg:text-3xl text-xl"><span className="lg:text-5xl text-2xl font-Montserrat font-bold">200+</span> Menu</p>
                <p className="text-[#FDD78C] flex items-center gap-x-2 lg:text-3xl text-xl"><span className="lg:text-5xl text-2xl font-Montserrat font-bold">95%</span> Users Report Healthier</p>
            </div>
        </div>
    );
};

export default WelcomeSection;