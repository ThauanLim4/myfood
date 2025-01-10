"use client";
import "@/app/globals.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchHeader = () => {
    const {searchValue, setSearchValue} = useState("");
    const [inputFocus, setInputFocus] = useState(false);

    return (
        <div>
            <form method="get" action={`/search?result=${searchValue}`} className="flex flex-col gap-5">
                    <div className={`flex items-center border border-verdeescuro text-verdeescuro gap-2 p-2 rounded-lg ${inputFocus ? "w-full shadow shadow-verdeescuro" : "w-28"} transition-all duration-300`}>
                        <FaSearch />
                        <input onFocus={() => setInputFocus(true)} onBlur={() => setInputFocus(false)} className="outline-none w-full bg-transparent hover:bg-transparent focus:bg-transparent placeholder:text-verdeescuro" type="text" name="search" onChange={e => setSearchValue(e.target.value)} placeholder="Pesquisar" />
                    </div>
                </form>
        </div>

    )
}