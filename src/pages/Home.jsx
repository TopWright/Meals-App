/* eslint-disable react/no-unescaped-entities */

import img from '../assets/images/hero.png'
import { useQuery } from "@tanstack/react-query";
import { getMealsByCategories } from "../services";
import { If } from "../helpers";
import Meal from "../components/Meals";

const Home = () => {
  const category = 'Miscellaneous'

  const { data } = useQuery({
    queryKey: ['categories', category],
    queryFn: () => getMealsByCategories(category)
  })

  const meals = data?.data?.meals

  return (
    <>
      <section className="hero contain flex items-center justify-between px-32 py-10">
        <div className="">
          <h1 className="text-7xl font-semibold mb-5">Let's find your ramen!</h1>
          <p className="text-3xl w-[70%] leading-relaxed">pasta, Creamy pork soup, spring onions, spicy chicken and many more delicious meals available for you...</p>
        </div>
        <img src={img} alt="" />
      </section>

      <section className="meals contain py-40">
        <div className="flex items-center justify-between mb-24">
          <h1 className="text-6xl font-semibold">Popular Meals</h1>
          <button className="bg-[#fec330] py-5 p-10 text-2xl rounded-full">View More</button>
        </div>

        <div className="flex flex-wrap gap-20">
          <If condition={meals?.length > 1}>
            {meals?.map(el => (
              <Meal
                key={el?.idMeal}
                image={el?.strMealThumb}
                text={el?.strMeal}
              />
            ))}
          </If>
        </div>
      </section>
    </>
  )
}

export default Home