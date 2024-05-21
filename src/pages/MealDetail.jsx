import { Link, useParams } from "react-router-dom";
import { getMealDetails } from "../services";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";

import { MdSource } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { DetailsSkeleton } from "../components/library/Skeleton";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GoBack } from "../helpers";


const MealDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['meal-detail', id],
    queryFn: () => getMealDetails(id)
  })

  const detail = data?.data?.meals[0]

  if (isLoading) return <DetailsSkeleton cards={1} />

  return (
    <div className="contain py-20">
      <div className="flex items-center gap-10 mb-32">
        <IoIosArrowRoundBack size={50} className="cursor-pointer" onClick={GoBack} />
        <h1 className="text-6xl font-semibold">Meals Details</h1>
      </div>


      <div className="flex gap-32">
        <div className="detail flex-1">
          <img src={detail?.strMealThumb} alt={detail?.strMeal} className="w-full" />
        </div>
        <div className="flex-1 pt-32 flex flex-col justify-between">
          <div className="">
            <h1 className="text-7xl font-semibold mb-5 tracking-wider">{detail?.strMeal}</h1>
            <div className="flex items-center gap-5 mb-5">
              <h2 className="text-4xl font-medium">Tags:</h2>
              <p className="text-3xl">{detail?.strTags ? detail?.strTags : '-'}</p>
            </div>
            <div className="flex items-center gap-5 mb-5">
              <h2 className="text-4xl font-medium">Category:</h2>
              <p className="text-3xl">{detail?.strCategory ? detail?.strCategory : '-'}</p>
            </div>
            <div className="flex items-center gap-5 mb-5">
              <h2 className="text-4xl font-medium">Area:</h2>
              <p className="text-3xl">{detail?.strArea ? detail?.strArea : '-'}</p>
            </div>
            <div className="flex items-center gap-5 mb-5">
              <h2 className="text-4xl font-medium">Ingredients:</h2>
              <p className="text-3xl capitalize">
                {detail?.strIngredient1},
                {detail?.strIngredient2},
                {detail?.strIngredient3},
                {detail?.strIngredient4},
                {detail?.strIngredient5}...
              </p>
            </div>
          </div>


          <div className="mb-20">
            {detail?.strSource ? (
              <Link to={detail?.strSource} target="_blank" className="flex items-center gap-7 cursor-pointer mb-10">
                <MdSource size={40} />
                <p className="text-3xl underline">Learm More</p>
              </Link>
            ) : <>-</>}

            {detail?.strYoutube ? (
              <Link to={detail?.strYoutube} target="_blank" className="flex items-center gap-7 cursor-pointer">
                <FaYoutube size={40} />
                <p className="text-3xl underline">Watch Video</p>
              </Link>
            ) : <>-</>}
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-5xl font-medium mb-16">Instructions</h1>
        <h3 className="text-3xl">
          {
            detail?.strInstructions.split(/\d+\.\s+/).map((step, index) => (
              <Fragment key={index}>
                {index > 0 && <br />}
                <p>
                  <span className="font-medium mr-5">{`${index + 0}`}.</span>
                  <span>{`${step}`}</span>
                </p>
              </Fragment>
            ))
          }
        </h3>
      </div>
    </div>
  )
}

export default MealDetail
