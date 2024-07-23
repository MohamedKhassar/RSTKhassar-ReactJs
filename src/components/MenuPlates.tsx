import { Rating } from "@mui/material"
import { useState } from "react"
import { Fade } from "react-awesome-reveal"
const MenuPlates = () => {
    const moroccan_foods = [
        {
            "title": "Tagine",
            "description": "A slow-cooked savory stew, typically made with meat, poultry, or fish, and vegetables or fruit, seasoned with spices.",
            "image": "tagine.jpg",
            "rating": 4.7,
            "price": 15.99
        },
        {
            "title": "Couscous",
            "description": "A traditional North African dish made from steamed semolina wheat, often served with meat and vegetables.",
            "image": "couscous.jpg",
            "rating": 4.5,
            "price": 12.99
        },
        {
            "title": "Pastilla",
            "description": "A sweet and savory pie made with thin layers of dough, often filled with pigeon or chicken, almonds, and spices.",
            "image": "pastilla.jpg",
            "rating": 4.8,
            "price": 18.99
        },

        {
            "title": "Rfissa",
            "description": "A flavorful dish made with shredded pancakes, chicken, lentils, and fenugreek seeds, often served during special occasions.",
            "image": "rfissa.jpg",
            "rating": 4.7,
            "price": 16.99
        },
        {
            "title": "Briouat",
            "description": "Small pastry parcels filled with meat or seafood, and sometimes with sweet fillings like almonds, fried or baked until crispy.",
            "image": "briouat.jpg",
            "rating": 4.5,
            "price": 7.99
        },
        {
            "title": "Zaalouk",
            "description": "A Moroccan cooked salad made from eggplants, tomatoes, garlic, olive oil, and spices, served as a side dish or appetizer.",
            "image": "zaalouk.jpg",
            "rating": 4.4,
            "price": 6.99
        },
        {
            "title": "Harira",
            "description": "A traditional Moroccan soup made with tomatoes, lentils, chickpeas, and meat, usually served during Ramadan.",
            "image": "harira.jpg",
            "rating": 4.6,
            "price": 9.99
        },
        {
            "title": "Chebakia",
            "description": "A traditional Moroccan sesame cookie, deep-fried and coated with honey, often enjoyed during Ramadan.",
            "image": "chebakia.jpg",
            "rating": 3,
            "price": 5.99
        }
    ]
    const [nOfCard, setNOfCard] = useState(4)
    const newArr = moroccan_foods.slice(0, nOfCard)
    return (
        <div id="menu" className="-mt-6 rounded-3xl bg-[#1D1D1D] w-full px-8 py-20 text-white space-y-20 relative z-10">
            <Fade cascade duration={1000} direction="left">
                <div className="flex lg:flex-row flex-col space-y-5 lg:justify-between lg:items-end justify-center items-center">
                    <div className="space-y-4 w-full">
                        <h1 className="lg:text-4xl capitalize lg:w-[25%] text-xl font-bold lg:leading-[3rem] font-Montserrat">Indulge in our exquisite favorites</h1>
                        <p className="lg:w-1/3 text-left font-semibold text-gray-500 lg:text-lg text-xs font-Montserrat">Discover a symphony of tastes with our handpicked favorites that promise to delight your senses</p>
                    </div>
                    <div className="lg:w-[10%] w-full">
                        <button className="w-full lg:px-5 lg:py-3 px-3 py-2 lg:text-base text-sm border border-[#FDD78C] rounded-md font-Montserrat font-semibold capitalize hover:bg-[#FDD78C] hover:text-[#664b14] text-[#FDD78C] duration-300">book online</button>
                    </div>
                </div>
            </Fade>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 place-items-center h-fit">
                <Fade duration={1000} direction="left">
                    {newArr.slice(0, nOfCard).map((food, i) =>
                        <div className="rounded-lg lg:w-[30rem] space-y-7 hover:scale-105 duration-300 cursor-pointer w-[18rem] shadow-2xl hover:shadow-gray-500 p-5" key={i}>
                            <img src={`/assets/img/${food.image}`} className="lg:h-[20rem] lg:w-[30rem] rounded-md object-cover" alt="" />
                            <h1 className="lg:text-3xl text-2xl font-Montserrat font-bold capitalize">{food.title}</h1>
                            <p className="font-Montserrat font-medium text-zinc-400 text-sm">{food.description}</p>
                            <hr className="w-full rounded-md" />
                            <div className="flex justify-between items-center">
                                <Rating className="stroke-yellow-500 stroke-1 " name="half-rating-read" defaultValue={Number(food.rating)} precision={0.5} readOnly />
                                <strong className="text-lg font-Montserrat font-semibold">{Number(food.price * 10.35).toFixed(2)} DHS</strong>
                            </div>
                        </div>
                    )}
                </Fade>
            </div>
            {newArr[newArr.length - 1].title !== moroccan_foods[moroccan_foods.length - 1].title ?
                <div className="flex justify-center">
                    <button className="font-Montserrat font-semibold capitalize rounded-md shadow-2xl shadow-gray-500 w-1/2 p-5" onClick={() => setNOfCard(prev => prev += 4)}>load more</button>
                </div> :
                <div className="flex justify-center">
                    <button className="font-Montserrat font-semibold capitalize rounded-md shadow-2xl shadow-gray-500 w-1/2 p-5" onClick={() => setNOfCard(prev => prev -= 4)}>Show less</button>
                </div>
            }
        </div>
    )
}

export default MenuPlates