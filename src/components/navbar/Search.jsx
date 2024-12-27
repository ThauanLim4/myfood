"use client";
import "@/app/globals.css";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchHeader = () => {
    const {searchValue, setSearchValue} = useState("");

    return (
        <div>
            <div>
            <form method="get" onSubmit={(e) => <Link href={`/busca?result=${searchValue}`} />} className="flex flex-col gap-5">
                    <div className="flex items-center border border-verdeescuro text-verdeescuro gap-2 p-2 rounded-lg">
                        <FaSearch />
                        <input className="outline-none w-full bg-transparent hover:bg-transparent focus:bg-transparent placeholder:text-verdeescuro" type="text" name="search" onChange={e => setSearchValue(e.target.value)} placeholder="Pesquisar" />
                    </div>
                </form>
            </div>
        </div>

    )
}