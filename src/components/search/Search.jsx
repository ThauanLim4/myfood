"use client";
import "@/app/globals.css";
import { CategoriesSearch } from "@/components/search/Categories";
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
                {resultSearch.length >= 1 &&
                    <div className="grid grid-cols-2 max-w-screen-lg mx-auto max-sm:grid-cols-1 max-md:grid-cols-2 gap-5 mt-10">
                        {resultSearch.map((it, ind) => {
                            return (
                                <div key={ind} className="grid grid-cols-2-cols max-sm:border-b-2 border-gray-500/25 gap-5 hover:shadow-sombra cursor-pointer w-full max-w-96 h-32max-h-36 mx-auto p-2">
                                    <img className="imgs" src={it.images} alt={`foto de ${it.category}, ${it.food}`} />
                                    <div className="flex flex-col justify-center gap-1">
                                        <h3 className="text-base first-letter:uppercase">{it.food}</h3>
                                        <span>R$ {it.price.toFixed(2)}</span>
                                        <Link href={`/item/${it.food}?itemid=${it.id}`} className="flex items-center justify-center p-2 w-36 h-10 btnDefault1">Comprar</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>}
                    {resultSearch.length < 1 && <CategoriesSearch />}
            </div>
        </div>

    )
}