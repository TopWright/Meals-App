import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


export const MealSkeleton = ({ cards }) => {
    return Array(cards).fill(0).map((_, i) => (
        <SkeletonTheme key={i} >
            <div className='w-full sm:w-1/2 lg:w-[22.7%] p-2'>
                <div className="meal-image mb-5">
                    <Skeleton className="w-full h-[35rem]" />
                </div>
                <p className='text-3xl font-medium w-[50%]'>
                    <Skeleton className="" />
                </p>
            </div>
        </SkeletonTheme>
    ))
};
export const CategorySkeleton = ({ cards }) => {
    return Array(cards).fill(0).map((_, i) => (
        <SkeletonTheme key={i} >
            <button
                className={`category flex flex-col items-center justify-between p-10 cursor-pointer`}
            >
                <Skeleton className="h-[7rem] w-[7rem] mb-1" />
                <Skeleton className="p-1 w-[5rem]" />
            </button>
        </SkeletonTheme>
    ))
};

export const DetailsSkeleton = ({ cards }) => {
    return Array(cards).fill(0).map((_, i) => (
        <SkeletonTheme key={i} >
            <div className="contain py-36">
                <h1 className="text-6xl font-semibold mb-20">Meals Details</h1>

                <div className="flex gap-32">
                    <div className="detail flex-1">
                        <Skeleton className="w-full h-[75rem]" />
                    </div>
                    <div className="flex-1 pt-32 flex flex-col justify-between">
                        <div className="">
                            <h1 className="text-7xl font-semibold mb-5 tracking-wider">
                                <Skeleton />
                            </h1>
                            <div className="flex items-center gap-5 mb-5">
                                <Skeleton className="p-2 w-[30rem]" />
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <Skeleton className="p-2 w-[40rem]" />
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <Skeleton className="p-2 w-[50rem]" />
                            </div>
                            <div className="flex items-center gap-5 mb-5">
                                <Skeleton className="p-2 w-[70rem]" />
                            </div>
                        </div>


                        <div className="mb-20">
                            <Skeleton className="mb-5 w-[15rem]" />
                            <Skeleton className="w-[15rem]" />
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <h1 className="text-5xl font-medium mb-16">Instructions</h1>
                    <h3 className="text-3xl">
                        <Skeleton className="mb-9" />
                        <Skeleton className="mb-9" />
                        <Skeleton className="mb-9" />
                        <Skeleton className="mb-9" />
                    </h3>
                </div>
            </div>
        </SkeletonTheme>
    ))
};
