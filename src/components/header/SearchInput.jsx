import React from 'react';
import { FaSearch } from "react-icons/fa";


export const SearchInputComponent = () => {
    return (
        <div
            class="flex items-center border w-full focus-within:border-b-verdeescuro focus-within:shadow transition duration-300 pr-3 gap-2 bg-white border-gray-500/30 h-[35px] overflow-hidden">
            <input
                type="text"
                placeholder="Procure por Algum produto"
                class="w-full h-full pl-4 outline-none placeholder-gray-500 text-sm "
            />
            <FaSearch />
        </div>
    )
}
