"use client";
import { HeaderDefault } from "@/components/ComponentsDefault/header";
import { CartItemComponent } from "@/components/cart/cartItemComponent";
import { useEffect, useState } from "react";
import { fetchAllUsers, fetchAllItensInCart } from "../../api/utils/utilitys";
import empty_cart from "../../../public/empty_cart.svg";
import Image from "next/image";

const Favorites = () => {
    const [productsInCart, setProductsInCart] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchItensCart = async () => {
            try {
                const result = await fetchAllItensInCart();
                const userResult = await fetchAllUsers();
                const userResultFilter = await userResult.filter(e => e.authentication_key === token)
                const cartItensFilter = await result.filter(e => e.user_id === userResultFilter[0].id)
                setProductsInCart(cartItensFilter);
            } catch (err) { console.log("deu errado") }
        }
        fetchItensCart();
    }, []);

    return (
        <div className="flex flex-col gap-5 max-w-screen-lg mx-auto">
            <HeaderDefault nameLocation={"Carrinho"} />
            <div className="flex items-center justify-center mt-auto">

                {productsInCart.length >= 1
                    ? <CartItemComponent variableName={productsInCart} />
                    : <div className="flex flex-col items-center justify-center w-full gap-5">
                        <Image src={empty_cart} className="w-full max-w-xs mx-auto" alt="SVG representando que nada foi encontrado" />
                        <h3 className="text-xl font-semibold">carrinho vazio...</h3>
                    </div>
                }
            </div>
        </div>
    )
}

export default Favorites;