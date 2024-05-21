/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import {
    getAreas,
    getCategories,
    getIngredients,
    getMealsByArea,
    getMealsByCategory,
    getMealsByIngredients,
    searchMeal
} from "../services";
import { GetRandomElements, If } from "../helpers";
import { useEffect, useState } from "react";
import { Category, CategorySkeleton, Meal, MealSkeleton, Select } from "../components";
import { useSearchParams } from "react-router-dom";

const Meals = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchValue = searchParams.get("search") || "";
    const [selectedCategory, setSelectedCategory] = useState("Beef");
    const [selectedArea, setSelectedArea] = useState("");
    const [selectedIngredient, setSelectedIngredient] = useState("");

    const { data: categoryData, isLoading: categoryIsLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories
    });
    const { data: areaData } = useQuery({
        queryKey: ["area"],
        queryFn: getAreas
    });
    const { data: ingredientsData } = useQuery({
        queryKey: ["ingredients"],
        queryFn: getIngredients
    });

    const { data, isLoading } = useQuery({
        queryKey: ["meals", searchValue, selectedCategory, selectedArea, selectedIngredient],
        queryFn: () => {
            if (searchValue) {
                return searchMeal(searchValue);
            } else if (selectedCategory) {
                return getMealsByCategory(selectedCategory);
            } else if (selectedArea) {
                return getMealsByArea(selectedArea);
            } else if (selectedIngredient) {
                return getMealsByIngredients(selectedIngredient);
            }
        },
        enabled: !!selectedCategory || !!selectedArea || !!selectedIngredient || !!searchValue
    });

    const categories = categoryData?.data?.categories;
    const meals = data?.data?.meals;
    const areas = areaData?.data?.meals;
    const ingredients = ingredientsData?.data?.meals;

    const randomIngredients = ingredients ? GetRandomElements(ingredients, 20) : [];

    useEffect(() => {
        if (searchValue) {
            setSelectedCategory("");
            setSelectedArea("");
            setSelectedIngredient("");
        }
    }, [searchValue]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedArea("");
        setSelectedIngredient("");
        setSearchParams((prev) => {
            prev.delete("search");
            return prev;
        });
    };

    const handleAreaChange = (area) => {
        setSelectedArea(area);
        setSelectedCategory("");
        setSelectedIngredient("");
        setSearchParams((prev) => {
            prev.delete("search");
            return prev;
        });
    };

    const handleIngredientChange = (ingredient) => {
        setSelectedIngredient(ingredient);
        setSelectedCategory("");
        setSelectedArea("");
        setSearchParams((prev) => {
            prev.delete("search");
            return prev;
        });
    };

    return (
        <>
            <div className="w-full contain flex gap-16 overflow-x-auto py-10">
                <If condition={categoryIsLoading}>
                    <CategorySkeleton cards={12} />
                </If>
                <If condition={categories?.length > 0}>
                    {categories?.map((el) => (
                        <Category
                            key={el?.idCategory}
                            image={el?.strCategoryThumb}
                            text={el?.strCategory}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={handleCategoryChange}
                            setSelectedArea={setSelectedArea}
                            setSelectedIngredient={setSelectedIngredient}
                            setSearchParams={setSearchParams}
                        />
                    ))}
                </If>
            </div>

            <section className="meals contain py-52">
                <div className="flex items-center justify-between mb-24 flexCol2">
                    <h1 className="text-6xl font-semibold mb3">Meals For You</h1>
                    <div className="flex gap-10 flexCol3">
                        <Select
                            title="Filter By Area"
                            name="area"
                            value={selectedArea}
                            options={areas?.map((area) => ({
                                value: area.strArea,
                                label: area.strArea
                            }))}
                            handleChange={(e) => handleAreaChange(e.target.value)}
                        />
                        <Select
                            title="Filter By Ingredients"
                            name="ingredient"
                            value={selectedIngredient}
                            options={randomIngredients?.map((ingredient) => ({
                                value: ingredient.strIngredient,
                                label: ingredient.strIngredient
                            }))}
                            handleChange={(e) => handleIngredientChange(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-wrap gap-20">
                    <If condition={isLoading}>
                        <MealSkeleton cards={12} />
                    </If>
                    <If condition={meals?.length > 0}>
                        {meals?.map((el) => (
                            <Meal
                                key={el?.idMeal}
                                image={el?.strMealThumb}
                                text={el?.strMeal}
                                id={el?.idMeal}
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
            </section>
        </>
    );
};

export default Meals;
