"use client";
import { useEffect, useState } from "react";
import { fetchAllFoods } from "@/app/api/utils/utilitys";
import { FoodComponent } from "@/components/ComponentsDefault/foodsComponent";
const SearchPage = () => {
    const [resultSearch, setResultSearch] = useState([]);

    useEffect(() => {
        const urlResult = window.location.href.split('?')[1].split('=')[1];
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
        <div>
            {resultSearch && FoodComponent({ variableName: resultSearch })})
        </div>
    )    
}

export default SearchPage;