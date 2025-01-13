"use client";
import { useEffect, useState } from "react";
import { fetchAllFoods } from "@/app/api/utils/utilitys";
import { FoodComponent } from "@/components/ComponentsDefault/foodsComponent";
import { FoodComponentForSearch } from "@/components/ComponentsDefault/foodsComponent";
import { HeaderDefault } from "@/components/ComponentsDefault/header";
import { set } from "mongoose";
const SearchPage = () => {
    const [resultSearch, setResultSearch] = useState([]);
    const [CurrentLocation, setCurrentLocation] = useState("");

    useEffect(() => {
        const urlResult = window.location.href.split('?')[1].split('=')[1];
        setCurrentLocation(urlResult);
        const fetchResult = async () => {
            try {
                const result = await fetchAllFoods();
                const resultFilted = result.filter(
                    e => e.food.toLocaleLowerCase().includes(urlResult.toLocaleLowerCase()));
                    console.log(resultFilted)
                if(resultFilted.length < 1){
                    return setMensage("nenhum ítem foi encontrado");
                }
                setResultSearch(resultFilted);
            } catch (error) {
                console.log(error);
            }
        }

        fetchResult();
    }, [])

    return (
        <div className="max-w-screen-lg mx-auto">
            <HeaderDefault nameLocation={"Busca"} />
            <h1 className="text-xl font-semibold mt-5 px-5">Resultados para  
                <span className="text-verdeescuro">{" " + CurrentLocation}</span>
            </h1>
            {resultSearch && FoodComponentForSearch({ variableName: resultSearch })}
        </div>
    )    
}

export default SearchPage;