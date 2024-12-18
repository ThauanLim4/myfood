"use client";
import { useEffect, useState } from "react";

const FoodCategory = () => {
    const [url, setUrl] = useState('');
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        setUrl(window.location.href.split('/').pop())

        const fetchFoods = async () => {

            try {
                const response = await fetch(`/api/mysql/foods`);
                if (!response.ok) {
                    console.log('erro ao buscar o banco de dados')
                }
                console.log(url)
                const result = await response.json();
                console.log(result)
                const resultFilted = await result.filter(i => i.category === url)
                setFoods(resultFilted);
                console.log(resultFilted)

            } catch (erro) {

            }

        }
        fetchFoods();
    }, [url])

    return (
        <div>
            categoria de comida especifica de {url.split('/').pop()}
            {foods.map((i, ind) => {
                return (
                    <div>
                        <img width={200} height={200} src={i.images} alt="" />
                        <h2 className="text-xl">{i.food}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default FoodCategory;