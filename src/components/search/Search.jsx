"use client";
import "@/app/globals.css";
import { CategoriesSearch } from "@/components/search/Categories";
import { FoodComponentForSearch } from "../ComponentsDefault/foodsComponent";
import { fetchAllFoods } from "@/app/api/utils/utilitys";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchInitial = () => {
    const [searchValue, setSearchValue] = useState("");
    const [resultSearch, setResultSearch] = useState([]);
    const [mensage, setMensage] = useState("");

    const searchItens = async (e) => {
        e.preventDefault();
        if (searchValue.length < 1) {
            setMensage("Campo de pesquisa não pode ficar vazio!");
            return setResultSearch([])
        }
        try {
            const result = await fetchAllFoods();
            console.log("todas as comidas: ", result)
            const resultFilted = result.filter(
                e => e.food.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
            if(resultFilted.length < 1){
                return setMensage("nenhum ítem foi encontrado");
            }
            setResultSearch(resultFilted);
        } catch (erro) {
            console.error(erro);
        }
    }
    console.log(searchValue)

    return (
        <div>

            <form method="get" onSubmit={searchItens} className="flex flex-col gap-5">
                <div className="flex items-center border border-verdeescuro text-verdeescuro gap-2 p-2 rounded-lg">
                    <FaSearch />
                    <input className="outline-none w-full bg-transparent hover:bg-transparent focus:bg-transparent placeholder:text-verdeescuro" type="text" name="search"
                        onChange={e => {
                            setSearchValue(e.target.value) 
                            setMensage("")}} 
                        value={searchValue} placeholder="Pesquisar" />
                </div>
                <p className="text-center text-red-700">{mensage}</p>
            </form>

            <div>
                {resultSearch.length > 0 
                ? <FoodComponentForSearch variableName={resultSearch} />
                : <CategoriesSearch />}
            </div>
        </div>

    )
}