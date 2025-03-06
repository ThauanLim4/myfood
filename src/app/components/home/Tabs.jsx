import React from 'react';
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
export const TabsComponent = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 hidden max-sm:block max-md:block">
            <div
                class="flex justify-center items-center relative transition-all duration-[450ms] ease-in-out w-auto">
                <article
                    class="border-t border-solid border-black/15 w-full ease-in-out duration-500 left-0 flex shadow-lg shadow-black/15 bg-white">
                    <label
                        class="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border has-[:checked]:text-verdeescuro group flex flex-row gap-3 items-center justify-center text-black"
                        for="dashboard">
                        Home <FaHome />
                        <input id="dashboard" name="path" type="radio" class="hidden peer/expand" />
                    </label>
                    <label
                        class="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border has-[:checked]:text-verdeescuro group flex flex-row gap-3 items-center justify-center text-black"
                        for="profile"
                    >
                        Pesquisar <FaSearch />
                        <input id="profile" name="path" type="radio" class="hidden peer/expand" />
                    </label>
                    <label
                        class="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border has-[:checked]:text-verdeescuro group flex flex-row gap-3 items-center justify-center text-black"
                        for="messages">
                        Perfil <FaUser />
                        <input id="messages" name="path" type="radio" class="hidden peer/expand" />
                    </label>

                </article>
            </div>

        </div>

    )
}
