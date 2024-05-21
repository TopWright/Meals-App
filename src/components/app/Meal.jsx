import { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GetFromStorage, RenderErrorMessage, RenderSuccessMessage, SetToStorage } from "../../helpers";

const Meal = ({ image, text, id }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = GetFromStorage("favorites") || [];
        setIsFavorite(favorites.some((meal) => meal.id === id));
    }, [id]);

    const toggleFavorite = () => {
        let favorites = GetFromStorage("favorites") || [];
        if (isFavorite) {
            favorites = favorites.filter((meal) => meal.id !== id);
            RenderErrorMessage(`${text} has been removed from your favorites`);
        } else {
            favorites.push({ id, image, text });
            RenderSuccessMessage(`${text} has been added to your favorites`);
        }
        SetToStorage("favorites", favorites);
        setIsFavorite(!isFavorite);
    };


    return (
        <div className='w-full sm:w-[46%] lg:w-[22.7%] p-2'>
            <Link to={`/meal/${id}`}>
                <div className="meal-image mb-7 cursor-pointer">
                    <img src={image} alt={text} className="w-full" />
                </div>
            </Link>
            <div className="flex justify-between items-center">
                <Link to={`/meal/${id}`}>
                    <p className='text-3xl font-medium tracking-wide leading-snug hover:underline'>{text}</p>
                </Link>
                <CiStar
                    size={30}
                    color={isFavorite ? "gold" : "black"}
                    onClick={toggleFavorite}
                    className="cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Meal;
