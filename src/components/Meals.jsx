/* eslint-disable react/prop-types */

const Meal = ({ image, text }) => {
    return (
        <div className='w-full sm:w-1/2 lg:w-[22.7%] p-2'>
            <div className="meal-image mb-5">
                <img src={image} alt={text} className="w-full" />
            </div>
            <p className='text-3xl font-medium'>{text}</p>
        </div>
    )
}

export default Meal
