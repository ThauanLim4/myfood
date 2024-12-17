"use client";
import { useEffect, useState } from "react";

const Categorias = () =>{
    const [foods, setFoods] = useState([]);

    useEffect(() =>{
        const fetchFoods = async () =>{
            try {
                const response = await fetch('/api/mysql/foods');
                if(!response.ok){
                    console.log('erro ao buscar o banco de dados')
                }
                const result = await response.json();
                setFoods(result)
            } catch (erro) {

            }
        }
        fetchFoods();
    }, [])

    return (
        <div>
            <h1>Categorias</h1>
            {foods.map((item, index) =>{
                return (
                    <div key={index}>
                        <img src={item.img} alt="" />
                        {item.food}
                    </div>
                )
            })}
        </div>
    )
}

export default Categorias;