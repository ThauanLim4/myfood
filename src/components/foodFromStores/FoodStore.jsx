"use client";

import { useState, useEffect } from "react";

export const StoreItems = () => {
    const [url, setUrl] = useState('');
    const [menuStore, setMenuStore] = useState([]);
    let [loadedMenu, setLoadedMenu] = useState(``);
    useEffect(() => {
        const currentUrl = window.location.href.split('/store/').pop().split('?')[0];
        const decodedUrl = decodeURI(currentUrl).charAt(0).toUpperCase() + decodeURI(currentUrl).slice(1).toLowerCase();
        setUrl(decodedUrl)
        console.log(url)

        const fetchMenuStore = async () => {

            try {
                const response = await fetch(`/api/mysql/foods`);
                if (!response.ok) {
                    console.log('erro ao buscar o banco de dados')
                }
                const result = await response.json();
                const resultFilted = await result.filter(i => i.soldBy === url)
                setMenuStore(resultFilted);
                if (url) {
                    setLoadedMenu(<h1 className="text-xl font-semibold">Menu da <span className="text-verdeescuro">{url}</span></h1>);
                }
            } catch (erro) {
                
            }
            
        }
        fetchMenuStore();
    }, [url])

    return (
        <div className="flex flex-col gap-5">
            {loadedMenu}

            <div className="grid grid-cols-3 max-w-screen-lg mx-auto max-sm:grid-cols-1 max-md:grid-cols-2 gap-3">
                {menuStore.map((it, ind) => {
                    return (
                        <div key={ind} className="grid grid-cols-2-cols max-h-40 max-sm:border-r-0 max-sm:border-l-0 gap-5 hover:shadow-sombra cursor-pointer">
                            <img className="imgs" src={it.images} alt={`foto de ${it.category}, ${it.food}`} />
                            <div className="flex flex-col justify-center gap-1">
                                <h3 className="text-base first-letter:uppercase">{it.food}</h3>
                                <span>R$ {it.price.toFixed(2)}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}