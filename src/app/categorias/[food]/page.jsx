"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaStar, FaTruck } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";



import '@/app/globals.css';

const FoodCategory = () => {
    const [url, setUrl] = useState('');
    const [storesType, setStoresType] = useState([]);

    useEffect(() => {
        setUrl(window.location.href.split('/').pop())

        const fetchstores = async () => {
            try {
                const response = await fetch(`/api/mysql/stores`);
                if (!response.ok) {
                    console.log('erro ao buscar o banco de dados')
                }
                console.log(url)
                const result = await response.json();
                const resultFilted = await result.filter(i => i.type === url)
                setStoresType(resultFilted);
                console.log(resultFilted)

            } catch (erro) {

            }

        }
        fetchstores();
    }, [url])

    return (
        <div className="p-3">
            <div className="flex justify-around items-center">
                <div className="flex items-center gap-1">
                    <span className="flex items-center gap-1">Ordernar por <IoIosArrowDown /></span> <br />
                    <div className="fixed top-0 left-0">
                        <ul>
                            <li>Avaliações</li>
                        </ul>
                    </div>
                </div>
                <span className="flex items-center gap-1">frete grátis <FaTruck /></span>
            </div>

            {storesType.map((str, ind) => {
                return (
                    <div key={ind} className="p-3 gap-5 storeContainer w-full h-32 max-h-36 flex flex-col justify-between">
                        <div className="p-3 flex justify-between items-start hover:shadow-lg hover:cursor-pointer">
                            <Link href={`/store/${str.storeName.toLowerCase()}?storeid=${str.id}`} className="flex gap-3 items-center">
                                <img className="object-cover roundedFullMedium" src={str.storeImages ? str.storeImages : "https://res.cloudinary.com/dhl67mauv/image/upload/v1734696916/Closed_Stores-bro_iqr7zd.svg"} />
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-xl">{str.storeName}</h3>
                                    <div className="flex items-center gap-3"><FaStar className="text-yellow-300" /> {str.stars.toFixed(1)}</div>
                                </div>
                            </Link>
                            <button className="hover:text-red-500">
                                <CiHeart className="text-2xl" />
                            </button>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default FoodCategory;