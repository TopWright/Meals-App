import { Meal } from "../components"
import { GetFromStorage, If } from "../helpers"

const Favourites = () => {
  const meals = GetFromStorage('favorites')
  return (
    <div className="contain">
      <h1 className="text-6xl font-semibold py-20">Favourites</h1>

      <div className="flex flex-wrap gap-20">
        <If condition={meals?.length > 0}>
          {meals?.map((el) => (
            <Meal
              key={el?.id}
              image={el?.image}
              text={el?.text}
              id={el?.id}
            />
          ))}
        </If>
        <If condition={!meals || meals?.length === 0}>
          <div className="flex flex-col items-center justify-center w-full">
            <p className="text-3xl font-semibold mb-7">No meals here</p>
            <p className="text-3xl font-semibold">
              Try another category, area, or ingredient
            </p>
          </div>
        </If>
      </div>
    </div>
  )
}

export default Favourites
