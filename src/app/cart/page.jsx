"use client";
import { HeaderDefault } from "@/components/ComponentsDefault/header";
import { CartItemComponent } from "@/components/ComponentsDefault/cartItemComponent";
import { useEffect, useState } from "react";
import { fetchAllUsers, fetchAllItensInCart } from "../api/utils/utilitys";
import empty_cart from "../../../public/empty_cart.svg"
import Image from "next/image";

const Favorites = () => {

    const [productsInCart, setProductsInCart] = useState([]);
    const [userInfos, setUserInfos] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchItensCart = async () => {
            try {
                const result = await fetchAllItensInCart();
                const userResult = await fetchAllUsers();
                const userResultFilter = await userResult.filter(e => e.authentication_key === token)
                console.log(userResultFilter)
                const cartItensFilter = await result.filter(e => e.user_id === userResultFilter[0].id)
                console.log(cartItensFilter)
                setProductsInCart(cartItensFilter);
            } catch (err) { console.log("deu errado") }
        }
        fetchItensCart();
    }, []);

    return (
        <div className="h-full flex flex-col gap-5">
            <HeaderDefault nameLocation={"Carrinho"} />
            <div className="flex items-center justify-center mt-auto">

                {productsInCart
                    ? <CartItemComponent variableName={productsInCart} />
                    : <div className="flex flex-col items-center justify-center h-full gap-5">
                        <Image src={empty_cart} className="w-full max-w-xs mx-auto" alt="SVG representando que nada foi encontrado" />
                        <h3 className="text-xl font-semibold">carrinho vázio ainda...</h3>
                    </div>
                }
            </div>
        </div>
    )
}

export default Favorites;