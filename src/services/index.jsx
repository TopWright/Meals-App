import axios from "axios";

const api = axios.create({
    baseURL:
        import.meta.env.NODE_ENV === "development"
            ? `${import.meta.env.VITE_REACT_APP_LOCAL_BASEURL}`
            : `${import.meta.env.VITE_REACT_APP_PROD_BASEURL}`,
    headers: {
        "Content-Type": "application/json",
    },
});


export const searchMeal = (data) => {
    return api.get(`search.php?s=${data}`);
};

export const getCategories = () => {
    return api.get(`categories.php`);
};

export const getMealsByCategory = (data) => {
    return api.get(`filter.php?c=${data}`);
};

export const getAreas = () => {
    return api.get(`list.php?a=list`);
};

export const getMealsByArea = (data) => {
    return api.get(`filter.php?a=${data}`);
};
export const getIngredients = () => {
    return api.get(`list.php?i=list`);
};

export const getMealsByIngredients = (data) => {
    return api.get(`filter.php?i=${data}`);
};

export const getMealDetails = (id) => {
    return api.get(`lookup.php?i=${id}`);
};




