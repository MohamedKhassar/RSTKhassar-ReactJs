import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee"

const Reviews = () => {
    const reviewers = [
        'https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=150',
        'https://images.unsplash.com/photo-1503467913725-8484b65b0715?w=150',
        'https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?w=150',
        'https://images.unsplash.com/photo-1441622915984-05d13dfb3d8c?w=150',
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=150',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        'https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=150',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        'https://images.unsplash.com/photo-1531750026848-8ada78f641c2?w=150',
        'https://images.unsplash.com/photo-1597759337471-e8d3f7377041?w=150',
        'https://images.unsplash.com/photo-1598295472703-4e53c9ff70cc?w=150',
        'https://images.unsplash.com/photo-1581094360472-0e10ec8889c9?w=150',
        'https://images.unsplash.com/photo-1599140781359-a4c536a7babd?w=150',
        'https://images.unsplash.com/photo-1524159730786-4e74a1b78d7d?w=150',
        'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=150',
        'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=150',
        'https://images.unsplash.com/photo-1581094360472-0e10ec8889c9?w=150',
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150',
        'https://images.unsplash.com/photo-1557862921-37829c790f19?w=150',
        'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=150',
        'https://images.unsplash.com/photo-1541752171745-4176eee47556?w=150',
        'https://images.unsplash.com/photo-1482961674540-0b0e8363a005?w=150',
        'https://images.unsplash.com/photo-1562159278-1253a58da141?w=150',
        'https://images.unsplash.com/photo-1463860452799-793003efcb2d?w=150',
        'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=150',
        'https://images.unsplash.com/photo-1620400975054-4676c969e6c4?w=150',
        'https://images.unsplash.com/photo-1653857977833-43ca63136ebd?w=150',
        'https://images.unsplash.com/photo-1631377894831-46173f7af1f9?w=150',
        'https://images.unsplash.com/photo-1682368360051-f73e87dd9106D?w=150',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150',
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150',
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=150',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
        'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?w=150',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150',
        'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150',
        'https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?w=150',
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150',
        'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    ];

    const reviews = [
        { name: "Alice Johnson", age: 28, comment: "Great product! It exceeded my expectations and I would definitely recommend it to others." },
        { name: "Bob Smith", age: 35, comment: "The quality is good, but the delivery was delayed. Overall, a decent experience." },
        { name: "Carla White", age: 42, comment: "I love this! It works perfectly and the customer service was outstanding." },
        { name: "David Brown", age: 29, comment: "Not what I expected. The product doesn’t match the description and is a bit pricey." },
        { name: "Ella Green", age: 31, comment: "Fantastic experience from start to finish. The product is exactly as described and arrived quickly." },
        { name: "Frank Miller", age: 47, comment: "The product is okay, but I had some issues with the installation. Customer support was helpful, though." },
        { name: "Grace Lee", age: 26, comment: "Excellent value for the money. I’m very happy with my purchase and would buy again." },
        { name: "Henry Wilson", age: 38, comment: "Good product, but the packaging was damaged. Fortunately, the item was fine." },
        { name: "Ivy Adams", age: 33, comment: "Not satisfied with the purchase. The item did not meet my expectations and I had trouble returning it." },
        { name: "Jack Turner", age: 41, comment: "The product is as described and arrived on time. I would definitely recommend it." },
        { name: "Karen Roberts", age: 30, comment: "Really happy with this purchase. The quality is excellent and it’s exactly what I needed." },
        { name: "Liam Scott", age: 25, comment: "The product was good, but the customer service was lacking. Took a while to get a response." },
        { name: "Mia Clark", age: 27, comment: "This is just perfect for what I needed. Fast shipping and great quality!" },
        { name: "Noah Martinez", age: 34, comment: "The item arrived later than expected, but it’s good quality and works well." },
        { name: "Olivia Lewis", age: 29, comment: "The product is fine, but I had some issues with the installation. Instructions could be clearer." },
        { name: "Paul Walker", age: 36, comment: "Overall, I’m pleased with the purchase. The item matches the description and works as expected." },
        { name: "Quinn Hall", age: 32, comment: "Good quality, but the packaging could have been better. Some parts were loose upon arrival." },
        { name: "Rachel Young", age: 28, comment: "I’m very happy with my purchase. The product is exactly as described and works perfectly." },
        { name: "Sam King", age: 40, comment: "Not what I expected. The product doesn’t match the photos on the website." },
        { name: "Tina Adams", age: 27, comment: "Great service and a high-quality product. I’m satisfied with my purchase." },
        { name: "Ursula Allen", age: 37, comment: "The product is good, but the shipping took longer than expected. Overall, a positive experience." },
        { name: "Victor Turner", age: 41, comment: "Very pleased with the product. It arrived on time and was well-packaged." },
        { name: "Wendy Mitchell", age: 30, comment: "The product is just okay. It doesn’t seem as durable as I hoped." },
        { name: "Xander Wright", age: 28, comment: "Excellent quality and fast shipping. I’m very satisfied with my purchase." },
        { name: "Yara Carter", age: 33, comment: "Good quality but the item was slightly different from what I expected based on the description." },
        { name: "Zane Thompson", age: 25, comment: "Happy with the purchase. The item works as advertised and arrived quickly." },
        { name: "Amy Cooper", age: 31, comment: "The product is decent, but the customer service could use some improvement." },
        { name: "Brian Reed", age: 39, comment: "I’m satisfied with the product. It’s exactly what I was looking for and arrived on time." },
        { name: "Catherine Nelson", age: 34, comment: "Overall good quality, but the item arrived with a slight defect." },
        { name: "Derek Ross", age: 29, comment: "The product is good, but the instructions were unclear. I had to figure out some things on my own." },
        { name: "Elaine Parker", age: 36, comment: "Very pleased with the quality. The product matches the description perfectly." },
        { name: "Franklin Hughes", age: 45, comment: "The item is fine, but I had some issues with the delivery. It took longer than expected." },
        { name: "Gina Brooks", age: 32, comment: "Great value for the price. I’m happy with my purchase and would buy again." },
        { name: "Harry Diaz", age: 29, comment: "The product is okay, but I was expecting better based on the reviews." },
        { name: "Isla James", age: 31, comment: "Fantastic product! It works perfectly and I’m very satisfied with my purchase." },
        { name: "Jason Wright", age: 27, comment: "The product is good but the shipping process was a bit slow. Otherwise, it’s fine." },
        { name: "Kara Evans", age: 35, comment: "I’m very happy with my purchase. The quality is excellent and it arrived quickly." }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviewsCount = reviews.length;
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % reviewsCount);
            setAnimate(false);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);
    return (
        <div className="overflow-hidden h-fit w-full bg-slate-700 -mt-6 flex items-center justify-center relative py-20 flex-col lg:gap-y-20 gap-y-10">
            <Fade direction="down" cascade duration={1000}>
                <div className={`flex w-full flex-col justify-center items-center lg:gap-y-16 gap-y-10 ${animate ? "animated-text" : ""}`}>
                    <p className="font-Montserrat lg:text-4xl text-lg mx-3 lg:w-1/2 text-center font-bold text-[#FDD78C]">
                        "{reviews[currentIndex].comment}"
                    </p>
                    <h1 className="font-Montserrat lg:text-xl text-sm w-1/2 text-center font-semibold text-[#FDD78C]">
                        {reviews[currentIndex].name} ({reviews[currentIndex].age} YO)
                    </h1>
                </div>
            </Fade >
            <Fade cascade duration={2000}>
                <Marquee speed={60} gradientWidth={60}>
                    <div>
                        {reviewers.map((r, i) => <div key={i} className="-mr-5 border-4 border-white rounded-full inline-block">
                            <img src={r} alt="" className="lg:w-20 lg:h-20 object-cover rounded-full h-10 w-10"
                                loading="lazy"
                            />
                        </div>
                        )}
                    </div>
                </Marquee>
            </Fade >
        </div >
    )
}

export default Reviews