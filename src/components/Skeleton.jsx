import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const MealSkeleton = ({ cards }) => {
    return Array(cards).fill(0).map((_, i) => (
        <SkeletonTheme key={i} baseColor="#d7d7d770" highlightColor="#ffffff50">
            <div className='w-full sm:w-1/2 lg:w-[22.7%] p-2'>
                <div className="meal-image h-[35rem] mb-5">
                    <Skeleton className="w-full" />
                </div>
                <p className='text-3xl font-medium'>
                    <Skeleton className="py-5" />
                </p>
            </div>
        </SkeletonTheme>
    ))
};