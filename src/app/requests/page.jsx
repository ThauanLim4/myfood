"use client";
import { HeaderDefault } from "@/components/ComponentsDefault/header";
import { useEffect, useState } from "react";
import { fetchAllUsers, fetchAllRequests, fetchAllRequestsItens } from "../api/utils/utilitys";
import empty_requests from "../../../public/empty_requests.svg"
import Image from "next/image";
import { RequestItemComponent } from "@/components/ComponentsDefault/requestItemComponent";

const Favorites = () => {
    const [user, setUser] = useState([]);
    const [requestInfos, setRequestInfos] = useState([]);
    const [requestItens, setRequestItens] = useState([]);

    useEffect(() => {
        const tokenUser = localStorage.getItem("token");

        const fetchUser = async () => {
            try {
                const result = await fetchAllUsers();
                const resultUser = result.find((it) => it.authentication_key === tokenUser);
                setUser(resultUser);
                console.log(resultUser.id);

                try {
                    const result = await fetchAllRequests();
                    const resultRequests = result.filter((it) => it.user_id === resultUser.id);
                    setRequestInfos(resultRequests);
                    console.log(resultRequests);

                    try {
                        const result = await fetchAllRequestsItens();
                        const resultRequestsItens = result.filter((it) => it.request_id === resultRequests[0].id);
                        console.log(resultRequestsItens);
                        setRequestItens(resultRequestsItens);
                    } catch (erro) { }
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
        <div className="h-full flex flex-col gap-5 max-w-screen-lg mx-auto">
            <HeaderDefault nameLocation={"Pedidos"} />
            <div className="flex items-center justify-center mt-auto">
                {
                    requestItens.length >= 1
                        ? <RequestItemComponent requestItens={requestItens} requestInfos={requestInfos}  />
                        : <div className="flex flex-col items-center justify-center h-full gap-5">
                            <Image src={empty_requests} className="w-full max-w-xs mx-auto" alt="SVG representando que nada foi encontrado" />
                            <h3 className="text-xl font-semibold">Sem pedidos ainda...</h3>
                        </div>

                }
            </div>
        </div>
    )
}

export default Favorites;