/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query"
import { getCategories, getMealsByCategories } from "../services"
import { If } from "../helpers"
import { useState } from "react"
import Meal from "../components/Meals"
import { MealSkeleton } from "../components/Skeleton"

const Meals = () => {
    const [selectedCategory, setSelectedCategory] = useState('Beef');

    const { data: categoryData } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories
    })
    const { data, isLoading } = useQuery({
        queryKey: ['meal-categories', selectedCategory],
        queryFn: () => getMealsByCategories(selectedCategory)
    })

    const categories = categoryData?.data?.categories
    const meals = data?.data?.meals

    return (
        <>
            <div className="w-full contain flex gap-16 overflow-x-auto">
                <If condition={categories?.length > 1}>
                    {categories?.map(el => (
                        <Category
                            key={el?.idCategory}
                            image={el?.strCategoryThumb}
                            text={el?.strCategory}
                            setSelectedCategory={setSelectedCategory}
                            selectedCategory={selectedCategory}
                        />
                    ))}
                </If>
            </div>

            <section className="meals contain py-40">
                <div className="flex items-center justify-between mb-24">
                    <h1 className="text-6xl font-semibold">Popular Meals</h1>
                    <button className="bg-[#fec330] py-5 p-10 text-2xl rounded-full">View More</button>
                </div>

                <div className="flex flex-wrap gap-20">
                    <If condition={isLoading == false}>
                        <MealSkeleton cards={12} />
                    </If>
                    {/* <If condition={meals?.length > 1}>
                        {meals?.map(el => (
                            <Meal
                                key={el?.idMeal}
                                image={el?.strMealThumb}
                                text={el?.strMeal}
                            />
                        ))}
                    </If> */}
                </div>
            </section>
        </>
    )
}

export default Meals

const Category = ({ image, text, setSelectedCategory, selectedCategory }) => {
    const isSelected = selectedCategory === text;

    return (
        <button
            className={`category flex flex-col items-center justify-between p-10 cursor-pointer ${isSelected ? 'active' : ''}`}
            onClick={() => setSelectedCategory(text)}
        >
            <div className="w-[6rem]">
                <img src={image} alt={text} className="mb-10 w-full" />
            </div>
            <p className="text-2xl font-semibold">{text}</p>
        </button>
    )
}
