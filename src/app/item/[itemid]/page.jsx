"use client";
import { useEffect, useState } from "react";

const ItemFood = () => {
    const [url, setUrl] = useState('');
    const [item, setItem] = useState([]);

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
                console.log(url)
                const result = await response.json();
                console.log(result)
                const resultFilted = await result.filter(i => i.id === url)
                setItem(resultFilted);
                console.log(resultFilted)

            } catch (erro) {

            }

        }
        fetchitem();
    }, [url])

    return (
        <div className="p-5">
            {item.map((item, ind) => {
                return (
                    <div key={ind} className="">
                        <div className="mx-auto flex flex-col items-center">
                            <img className="w-40 h-40 object-contain" src={item.images} alt="" />
                        </div>
                        <div>
                            <h2 className="text-xl">{item.food}</h2>
                            <span> R$ {item.price.toFixed(2)}</span>
                            <h3>{item.category}</h3>
                            <p>{item.description}</p>
                        </div>
                        <div>
                            {item.soldBy}
                        </div>
                        <div>
                            <button>Adicionar ao carrinho</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemFood;