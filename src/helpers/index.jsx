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