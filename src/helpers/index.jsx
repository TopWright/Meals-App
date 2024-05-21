import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */

export const GoBack = () => {
    window.history.back()
}

export function If({ condition, children }) {
    return condition
        ?
        <>{children}</>
        :
        null;
}

export const SetToStorage = (key, value) => {
    let storedValue = JSON.stringify(value);
    localStorage.setItem(key, storedValue);
};

export const GetFromStorage = (key) => {
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

export const NavigateTo = (link) => {
    const navigate = useNavigate();
    return () => navigate(link);
}

export const GetRandomElements = (array, numElements) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numElements);
};