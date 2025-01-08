"use client";
import { CategoriesInitial } from "./Categories";
import { StoresInitial } from "./Stores";
import { FoodsInitial } from "./Foods";
import { Navbar } from "@/components/navbar/navbar";
import { useData } from "@/context/foodsAndStoresContext";

export const HomeInitial = () => {
    const { foods, stores } = useData();

    return (
        <>
            <section className=" max-w-screen-xl border-b-2 mx-auto border-gray-500/25">
                <Navbar />
            </section>
            <div className="p-5">
                <div>
                    <CategoriesInitial />
                </div>
                <div>
                    <StoresInitial stores={stores} />
                </div>
                <div>
                    <FoodsInitial foods={foods} />
                </div>
            </div>
        </>
    )
}