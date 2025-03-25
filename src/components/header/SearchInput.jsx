import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";


export const SearchInputComponent = () => {
    const [valueInput, setValueInput] = useState('');
    const router = useRouter();

    const handleSearchItens = (e) => {
        e.preventDefault();
        router.push(`/pages/search?result=${valueInput}`, true);

    }
    return (
        <div>
            <form action="" className='flex items-center border w-full focus-within:border-b-verdeescuro focus-within:shadow transition duration-300 pr-3 gap-2 bg-white border-gray-500/30 h-[35px] overflow-hidden' onSubmit={(e) => handleSearchItens(e)}>
                <input
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                    type="text"
                    placeholder="Procure por Algum produto..."
                    class="w-full h-full pl-4 outline-none placeholder-gray-500 text-sm "
                />
                <FaSearch />
            </form>
        </div>
    )
}
