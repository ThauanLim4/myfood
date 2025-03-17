"use client"
import "@/app/globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export const CategoriesComponent = () => {
    const itensCategoriesClass = "flex flex-col justify-center items-center text-center w-32 h-28";
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(async () => {
        const getCategories = await fetch("/api/categories");
        const result = await getCategories.json();
        setCategoriesData(result);
        console.log(result);
    }, [])

    return (
        <div>
            <div className="text-start">
                <h2 className="flex text-xl font-semibold p-3">Categorias</h2>

                <div className="flex items-center gap-3 w-full h-56 max-sm:overflow-x-scroll max-md:overflow-x-scroll max-lg:overflow-x-scroll">
                    <Swiper slidesPerView={2} spaceBetween={10}
                        breakpoints={
                            {
                                320: { slidesPerView: 3 },

                            }
                        }>
                        {categoriesData ?
                            categoriesData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="hover:shadow-sombrainterna">
                                            <Link href={`categorias/${item.name.trim().toLocaleLowerCase()}`} className="grid grid-rows-0.7/0.3-rows items-center justify-center gap-3 bg-opacity-50 hover:bg-verdeclaro transition-all duration-300 rounded-lg">
                                                <div className={`${itensCategoriesClass} rounded-b-full`}>
                                                    <img className="min-w-28 min-h-28 object-contain" src={item.image} width={100} height={100} alt="" />
                                                </div>
                                                <h3 className="font-light text-ellipsis hover:text-verdeescuro hover:cursor-pointer text-center">{item.name}</h3>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                )
                            }) : <></>}
                    </Swiper>
                </div>
            </div>

        </div>
    )
}


