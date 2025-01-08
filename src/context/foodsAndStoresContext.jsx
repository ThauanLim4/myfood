"use client";
import { fetchAllFoods } from "@/app/api/utils/utilitys";
import { fetchAllStores } from "@/app/api/utils/utilitys";
import { useState, useEffect, createContext, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [foods, setFoods] = useState([]);
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const storedFoods = JSON.parse(localStorage.getItem("foods")) || [];
        const storedStores = JSON.parse(localStorage.getItem("stores")) || [];
        setFoods(storedFoods);
        setStores(storedStores);

        if (storedFoods.length === 0) {
            fetchFoods();
        }
        if (storedStores.length === 0) {
            fetchStores();
        }
    }, []);

    const fetchFoods = async () => {
        try {
            const result = await fetchAllFoods();
            console.log(result);
            setFoods(result);
            localStorage.setItem("foods", JSON.stringify(result));
        } catch (erro) { }
    };

    const fetchStores = async () => {
        try {
            const result = await fetchAllStores();
            setStores(result);
            localStorage.setItem("stores", JSON.stringify(result));
        } catch (erro) { }
    };

    return (
        <DataContext.Provider value={{ foods, stores }}>
            {children}
        </DataContext.Provider>
    )

}

export const useData = () => useContext(DataContext)