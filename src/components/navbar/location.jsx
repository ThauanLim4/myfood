"use client";
import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { FaSearchLocation } from "react-icons/fa";

import { fetchAllUsers } from "@/app/api/utils/utilitys";
import "@/app/globals.css";
import { CloseDefault } from "../ComponentsDefault/header";
import { searchLocalization } from "../../app/api/utils/searchLocalization";
import axios, { Axios } from "axios";

export const Location = () => {
    const [modalLocation, setModalLocation] = useState(false);
    const [areaLocation, setAreaLocation] = useState("");
    const [userToken, setUserToken] = useState("");
    const [userLocation, setUserLocation] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!userLocation) {
            setUserToken(token);
            const fetchLocation = async () => {
                try {
                    const response = await fetchAllUsers();
                    const resultFilted = response.find((e) => e.authentication_key === token);
                    if (!resultFilted) {
                        console.log("o usuário não possuíuma localização");
                    }
                    const loc = resultFilted.address;
                    setUserLocation(loc);
                    localStorage.setItem("location", JSON.stringify(loc));
                } catch (erro) {
                    console.log("erro ao buscar endereço do usuário", erro);
                }
            };
            fetchLocation();
        }
    }, [userLocation]);


    const getLocation = async () => {
        if (userLocation) {
            return console.log("localização do usuário já obtida");
        }
        try {
            const result = await searchLocalization();
            const response = await fetchAllUsers();
            const resultFilted = response.find((e) => e.authentication_key === userToken);
            console.log(result)
            setAreaLocation(result);
            setUserLocation(result);
            localStorage.setItem("location", JSON.stringify(result));
            try {

                const loc = JSON.parse(localStorage.getItem("location"))
                const addLocation = await axios.post("/api/mysql/users/location", {
                    address: loc,
                    user_name: resultFilted.user_name
                })
                console.log(addLocation)
            } catch (erro) {
                console.log("erro ao adicionar localização", erro)
            }
        } catch (erro) {
            console.log("erro ao buscar localização", erro);
        }

    }

    return (
        <div>
            <button onClick={e => setModalLocation(!modalLocation)} className="flex items-center gap-2">
                {areaLocation
                    ? <span className="flex items-center gap-1">{areaLocation} <SlArrowDown className="text-xs" /></span>
                    : <span className="flex items-center gap-3 self">{userLocation ? userLocation : "carregando localização..."} </span>}
            </button>
            {
                modalLocation &&
                <div className="flex flex-col gap-3 text-verdeescuro fixed inset-0 z-50 bg-verdeclaro p-3 border border-gray-500/25 rounded-lg">
                    <CloseDefault functionClose={() => setModalLocation(false)} nameLocation={"Seu Endereço"} />
                    {userLocation &&
                        <div className="flex flex-col gap-3 mx-auto text-black border-black border-3 rounded-lg p-3 w-full max-w-2xl">
                            <h3 >R.{userLocation} </h3>
                        </div>}
                    {userLocation
                        ? <button className="flex items-center justify-center gap-3 btnDefault1-desabled fixed bottom-5 left-5 right-5 max-w-80 mx-auto">Localização já encontrada <FaSearchLocation /></button>
                        : <button onClick={getLocation} className="flex items-center justify-center gap-3 btnDefault1 fixed bottom-5 left-5 right-5 max-w-80 mx-auto">Procurar localização <FaSearchLocation /></button>}
                </div>
            }
        </div>
    )
}