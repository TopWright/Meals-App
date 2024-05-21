import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GetFromStorage, SetToStorage } from "../../helpers";


const Meal = ({ image, text, id }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = GetFromStorage('favourites') || [];
        setFavorites(storedFavorites);
    }, []);

    const handleFavoriteClick = () => {
        let updatedFavorites = [...favorites];

        if (!favorites.includes(id)) {
            updatedFavorites.push(id);
        } else {
            updatedFavorites = updatedFavorites.filter(favId => favId !== id);
        }

        setFavorites(updatedFavorites);
        SetToStorage('favourites', updatedFavorites);
    };


    return (
        <div className='w-full sm:w-1/2 lg:w-[22.7%] p-2'>
            <div className="meal-image mb-7">
                <img src={image} alt={text} className="w-full" />
            </div>
            <div className="flex justify-between items-center">
                <Link to={`/meal/${id}`}>
                    <p className='text-3xl font-medium tracking-wide leading-snug hover:underline'>{text}</p>
                </Link>
                <CiStar
                    size={25}
                    onClick={handleFavoriteClick}
                    color={` ${favorites.includes(id) ? '#fec330' : ''}`}
                />
            </div>
        </div>
    )
}

export default Meal
