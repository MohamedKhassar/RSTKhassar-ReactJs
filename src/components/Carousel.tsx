import { useEffect, useState } from "react"
import { Timeout } from "react-alice-carousel";

interface CarouselProps {
    items: string[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
    items,
    autoPlay = true,
    autoPlayInterval = 3000
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 700);

            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    useEffect(() => {
        let interval: Timeout;
        if (autoPlay) {
            interval = setInterval(() => {
                nextSlide();
            }, autoPlayInterval);
        }
        return () => clearInterval(interval);
    }, [currentIndex, autoPlay, autoPlayInterval]);


    const nextSlide = () => {
        const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        new Promise(() => setIsAnimating(true)).then(() => setIsAnimating(false))
    };


    return (
        <div className="flex justify-center lg:w-[70rem] lg:h-[30rem] h-[12rem] rounded-md overflow-hidden">
            <div className="flex justify-center items-center gap-x-4">
                <img src={currentIndex == 0 ? items[items.length - 1] : items[currentIndex - 1]} className={`lg:w-80 lg:h-60 w-52 h-36 object-cover rounded-md scale-95 blur-sm  ${isAnimating ? "animated-slider" : ""}`} alt="item" loading="lazy" />
                <img src={items[currentIndex]} className={`lg:w-96 lg:h-56 w-44 h-28 object-cover rounded-lg scale-150 z-30 ${isAnimating ? "animated-slider" : ""}`} alt="item" loading="lazy" />
                <img src={currentIndex == items.length - 1 ? items[0] : items[currentIndex + 1]} className={`lg:w-80 lg:h-60  w-52 h-36 object-cover rounded-md scale-95 blur-sm  ${isAnimating ? "animated-slider" : ""} z-10`} alt="item" loading="lazy" />
            </div>
        </div>
    )
}
