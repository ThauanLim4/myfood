"use client";

import { useState, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";
import {jwt} from "jsonwebtoken";

export const StoreItems = () => {
    const [url, setUrl] = useState('');
    const [menuStore, setMenuStore] = useState([]);
    let [loadedMenu, setLoadedMenu] = useState(``);
    let [modalItem, setModalItem] = useState(false);
    let [itensQuantity, setItensQuantity] = useState(1);
    let [quantityTotal, setQuantityTotal] = useState(0)

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
                const resultFilted = await result.filter(i => i.soldBy === url);
                console.log(result);
                console.log(resultFilted);
                setMenuStore(resultFilted);
                if (url) {
                    setLoadedMenu(<h1 className="text-xl font-semibold">Menu da <span className="text-verdeescuro">{url}</span></h1>);
                }
            } catch (erro) {

            }

        }
        fetchMenuStore();
    }, [url]);

    const addItem = () => {
        setItensQuantity(itensQuantity += 1)
    }

    const removeItem = () => {
        if (itensQuantity > 1) {
            setItensQuantity(itensQuantity -= 1)
        }
    }

    const addItensToCart = () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            window.location.href = '/login';
            return;
        }
    }

    return (
        <div className="flex flex-col gap-5">
            {loadedMenu}

            <div className="grid grid-cols-3 max-w-screen-lg mx-auto max-sm:grid-cols-1 max-md:grid-cols-2 gap-3 w-full">
                {menuStore.map((it, ind) => {
                    return (
                        <span key={ind}>

                            <div onClick={e => setModalItem(!modalItem)} key={ind} className="grid grid-cols-2-cols max-h-40 max-sm:border-r-0 max-sm:border-l-0 gap-5 hover:shadow-sombra cursor-pointer">
                                <img className="imgs" src={it.images} alt={`foto de ${it.category}, ${it.food}`} />
                                <div className="flex flex-col justify-center gap-5">
                                    <h3 className="text-base first-letter:uppercase">{it.food}</h3>
                                    <p className="text-xs">{it.description}</p>
                                    <span>R$ {it.price.toFixed(2).replace('.', ',')}</span>
                                </div>
                            </div>

                            {modalItem && <div className="fixed top-0 left-0 w-full h-full bg-verdeclaro z-50 p-3">
                                <button onClick={e => setModalItem(!modalItem)} className="font-semibold">
                                    <SlArrowDown />
                                </button>
                                <div className="flex items-center justify-center mb-5">
                                    <img className="w-full max-w-48 max-h-48 object-contain" src={it.images} alt={`foto de ${it.category}, ${it.food}`} />
                                </div>
                                <div className="flex flex-col gap-5 border-b-2 border-gray-500/25 pb-5">
                                    <h2 className="text-xl font-semibold">{it.food}</h2>
                                    <p className="">{it.description}</p>
                                    <span className="text-xl font-semibold">R$ {it.price.toFixed(2).replace('.', ',')}</span>
                                </div>

                                <div className="fixed bottom-0 w-full p-3 flex flex-col items-center gap-5 mx-auto left-0 right-0">
                                    <div className="mx-auto flex items-center gap-2">
                                        <button onClick={addItem} className="btnDefault1"> + </button>
                                        <label htmlFor="quantity">Quant. {itensQuantity}</label>
                                        <button onClick={removeItem} className={itensQuantity === 1 ? "btnDefault1-desabled" : "btnDefault1"}> - </button>
                                    </div>
                                    <button className="btnDefault1" onClick={addItensToCart} >
                                        Adicionar ao carrinho R$ 
                                        {(it.price * itensQuantity).toFixed(2).replace('.', ',')}
                                    </button>
                                </div>

                            </div>}

                        </span>
                    )
                })}

            </div>
        </div>
    )
}