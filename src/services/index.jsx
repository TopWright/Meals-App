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


export const getCategories = () => {
    return api.get(`categories.php`);
};

export const getMealsByCategories = (data) => {
    return api.get(`filter.php?c=${data}`);
};

export const getMealsByArea = (data) => {
    return api.get(`filter.php?a=${data}`);
};