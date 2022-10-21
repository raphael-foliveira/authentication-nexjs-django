import { useState, useEffect } from "react";

export function useLocalStorage(name) {
    const [item, setItem] = useState("");
    useEffect(() => {
        try {
            setItem(JSON.parse(localStorage.getItem(name)));
        } catch (error) {
            setItem(localStorage.getItem(name));
        }
    }, []);
    return item;
}