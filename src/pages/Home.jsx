/* eslint-disable react/no-unescaped-entities */

import img from '../assets/images/hero.png'
import { useQuery } from "@tanstack/react-query";
import { getMealsByCategory } from "../services";
import { If, NavigateTo } from "../helpers";
import { Meal, MealSkeleton } from '../components';

const Home = () => {
  const category = 'Miscellaneous'

  const { data, isLoading } = useQuery({
    queryKey: ['categories', category],
    queryFn: () => getMealsByCategory(category)
  })

  const meals = data?.data?.meals

  return (
    <>
      <section className="hero contain flex items-center justify-between sm:px-32 px-10 md:py-10 py-32 flexCol">
        <div className="">
          <h1 className="text-7xl font-semibold mb-5">Let's find your ramen!</h1>
          <p className="text-3xl w-[70%] wFull leading-relaxed">Pasta, Creamy pork soup, spring onions, spicy chicken and many more delicious meals available for you...</p>
        </div>
        <img src={img} alt="" />
      </section>

      <section className="meals contain py-40">
        <div className="flex items-center justify-between mb-24">
          <h1 className="text-6xl font-semibold">Popular Meals</h1>
          <button className="bg-[#fec330] py-5 p-10 text-2xl rounded-full cursor-pointer" onClick={NavigateTo('/meals')}>View More</button>
        </div>

        <div className="flex flex-wrap gap-20">
          <If condition={isLoading}>
            <MealSkeleton cards={12} />
          </If>
          <If condition={meals?.length > 1}>
            {meals?.map(el => (
              <Meal
                key={el?.idMeal}
                image={el?.strMealThumb}
                text={el?.strMeal}
                id={el?.idMeal}
              />
            ))}
          </If>
          <If condition={!meals || meals?.length < 0}>
            <div className="flex flex-col items-center justify-center w-full">
              <p className="text-3xl font-semibold mb-7">No meals here</p>
            </div>
          </If>
        </div>
      </section>
    </>
  )
}

export default Home
