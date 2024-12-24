"use client";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import '@/app/globals.css';

const ItemFood = () => {
    const [url, setUrl] = useState('');
    const [item, setItem] = useState([]);
    const [store, setStore] = useState([]);

    useEffect(() => {
        const currentUrl = window.location.href.split('itemid=').pop()
        const decodedUrl = decodeURI(currentUrl);
        setUrl(Number(decodedUrl))

        const fetchitem = async () => {

            try {
                const response = await fetch(`/api/mysql/foods`);
                if (!response.ok) {
                    console.log('erro ao buscar o banco de dados')
                }
                const result = await response.json();
                const resultFilted = await result.filter(i => i.id === url)
                setItem(resultFilted);

                let hashStore = resultFilted[0].storeIndentification;

                console.log(hashStore)

                const fetchstore = async () => {

                    try {
                        const response = await fetch(`/api/mysql/stores`);
                        if (!response.ok) {
                            console.log('erro ao buscar o banco de dados')
                        }
                        const result = await response.json();
                        const resultFilted = await result.filter(i => i.storeIndentification === hashStore)
                        setStore(resultFilted);
                    } catch (erro) {

                    }

                }

                fetchstore();
            } catch (erro) {
                console.log('erro ao buscar o banco de dados');
            }

        }

        fetchitem();
    }, [url])

    return (
        <div className="">
            {item.map((item, ind) => {
                return (
                    <>
                        <div key={ind} className="flex flex-col gap-3 p-5">
                            <div className="mx-auto flex flex-col items-center w-full max-h-40 ">
                                <img className="w-full max-h-40 object-contain" src={item.images} alt="" />
                            </div>
                            <div className="flex gap-3 flex-col border-b-2 border-gray-500/25 pb-3">
                                <h2 className="text-xl font-semibold">{item.food}</h2>
                                <span className="text-xl font-semibold text-verdeescuro"> R$ {item.price.toFixed(2)}</span>
                                <p>{item.description}</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                {store.map((str, ind) => {
                                    return (
                                        <div key={ind} className="flex gap-3 items-center">
                                            <img className="roundedFullMini" key={ind} src={str.storeImages} alt="" />
                                            <h3 className="font-semibold">{item.soldBy}</h3>
                                            <span className="flex items-center gap-1">
                                                <FaStar className="text-yellow-300" />{str.stars}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                        <div className="flex justify-center border-t-2 border-gray-500/25 pt-3 w-full max-h-28">
                            <button className="bg-verdeescuro text-white px-3 py-1 border-r-2 border-gray-500/30"><IoIosAdd /></button>
                            <button className="bg-verdeescuro text-verdeclaro px-3 py-1 w-full">Adicionar ao carrinho</button>
                            <button className="bg-verdeescuro text-white px-3 py-1 border-l-2 border-gray-500/30"><IoIosRemove /></button>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default ItemFood;