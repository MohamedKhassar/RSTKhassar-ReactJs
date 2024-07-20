import {
    EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Fade } from 'react-awesome-reveal'


type PropType = {
    slides: string[]
    options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef] = useEmblaCarousel(options, [Autoplay({ stopOnFocusIn: false, delay: 8000, stopOnInteraction: false, stopOnMouseEnter: false })])





    return (
        <Fade cascade direction="down" duration={1000} className='pt-10 flex flex-col justify-center items-center gap-y-10'>
            <h1 className='text-[#FDD78C] font-Montserrat lg:text-4xl text-xl font-bold text-center'>Welcome to <span className='lg:text-5xl text-[24px] text-shadow-animate uppercase font-bold'>rstkhassar</span></h1>
            <div className="embla rounded-md overflow-hidden shadow-2xl shadow-[#FDD78C]/30">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container rounded-lg">
                        {slides.map((index) => (
                            <div className="embla__slide" key={index}>
                                <img
                                    className="embla__slide__img object-cover"
                                    src={index}
                                    alt="Your alt text" loading='lazy'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Carousel
