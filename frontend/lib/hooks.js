import { useState, useEffect } from "react";

export function useLocalStorage(name, value) {
    const [item, setItem] = useState("");
    useEffect(() => {
        setItem(localStorage.getItem(name))
    }, []);
    return item;
}