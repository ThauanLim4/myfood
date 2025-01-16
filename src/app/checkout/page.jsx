"use client";

import { useEffect, useState } from "react";
import { fetchAllUsers, fetchAllItensInCart, fetchAllStores } from "../api/utils/utilitys";
import { CheckoutComponent } from "@/components/cart/checkoutComponent";
import { CartItemComponent } from "@/components/cart/cartItemComponent";
import { HeaderDefault } from "@/components/ComponentsDefault/header";

const Checkout = () => {
    const [user, setUser] = useState([]);
    const [cart, setCart] = useState([]);
    const [store, setStore] = useState([]);

    useEffect(() => {
        const tokenUser = localStorage.getItem("token");

        const fetchUser = async () => {
            try {
                const result = await fetchAllUsers();
                const resultUser = result.find((it) => it.authentication_key === tokenUser);
                setUser(resultUser);
                console.log(resultUser);
                try {
                    const result = await fetchAllItensInCart();
                    const resultCart = result.filter((it) => it.user_id === resultUser.id);
                    setCart(resultCart);
                    console.log(resultCart);
                } catch (erro) {
                    console.log("erro")
                }

            } catch (erro) {
                console.log("erro")
            }
        }

        fetchUser();
    }, []);
    return (
        <div className="max-w-screen-lg mx-auto">
            <HeaderDefault nameLocation={"Checkout"} />
            <div className="p-5" >
                {cart.length !== 0
                    ? <CheckoutComponent variableName={cart} userInfos={user} />
                    :
                    <div className="flex flex-col items-center justify-center h-full gap-5">
                        <h3 className="text-xl font-semibold">Nada encontrado...</h3>
                    </div>
                }
            </div>
        </div>
    );
};

export default Checkout;
