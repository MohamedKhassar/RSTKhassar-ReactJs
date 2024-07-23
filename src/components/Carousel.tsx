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
        <Fade duration={500} className='pt-10 flex flex-col justify-center items-center gap-y-10'>
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
