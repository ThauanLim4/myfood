"use client";
import "@/app/globals.css";
import { ProductDefaultComponent } from "@/components/ProductDefault";
import { convertDiscount } from "@/helpers/convertDiscount";
import { convertPrice } from "@/helpers/convertPrice";
import Link from "next/link";
import { useEffect, useState } from "react";
export const ProductsComponent = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const getProducts = await fetch("/api/products");
            const resultProducts = await getProducts.json();
            setProductsData(resultProducts);
            console.log(resultProducts);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <ProductDefaultComponent dataOfProducts={productsData} nameSectin={"Produtos"} />
        </div>
    )
}
