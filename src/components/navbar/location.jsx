"use client";
import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearchLocation, FaLocationCrosshairs } from "react-icons/fa";
import "@/app/globals.css";

export const Location = () => {
    const [modalLocation, setModalLocation] = useState(false);
    const [areaLocation, setAreaLocation] = useState("");
    const [userToken, setUserToken] = useState("");
    const [userLocation, setUserLocation] = useState("");

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setUserToken(token);
        const fetchLocation = async () => {
            try {
                const response = await fetch("/api/mysql/users");
                const result = await response.json();
                const resultFilted = result.rows.filter((e) => e.authentication_key === token);
                if (resultFilted.lenght < 1) {
                    console.log("o usuário não possuíuma localização");
                }
                setUserLocation(resultFilted[0].address)
            } catch (erro) {
                console.log("erro ao buscar endereço do usuário", erro);
            }
        };
        fetchLocation();
    }, []);


    const searchLocalization = async () => {
        if (userLocation) {
            return console.log("localização do usuário já obtida");
        } else {
            onsole.log("isso aqui foi executado");
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                })
            }

            const urlMap = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

            try {
                const response = await fetch(urlMap);
                if (!response.ok) {
                    return console.log('erro ao buscar a localização');
                }
                const result = await response.json();
                console.log(result)
                const resultFilted = result.address.road + " - " + result.address.city_district;
                setAreaLocation(resultFilted);
                saveLocation();

            } catch (erro) {
                console.log("erro ao obter o endereço", erro)
            }
            const saveLocation = async () => {
                try {
                    const response = await fetch("/api/mysql/users", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            address: areaLocation,
                            authentication_key: userToken
                        })
                    });
                    console.log(response)
                } catch (erro) {
                    console.log("erro ao salvar o endereço", erro)
                }
            }

        }

    }

    return (
        <>
            <button onClick={e => setModalLocation(!modalLocation)} className="flex items-center gap-2">
                {areaLocation
                    ? <span className="flex items-center gap-1">{areaLocation} <SlArrowDown className="text-xs" /></span>
                    : <span className="flex items-center gap-3">{userLocation ? userLocation : "Localização"} </span>}
            </button>
            {
                modalLocation &&
                <div className="flex flex-col gap-3 text-verdeescuro fixed inset-0 z-50 bg-verdeclaro p-3 border border-gray-500/25 rounded-lg">
                    <h2 className="text-2xl text-black font-semibold mx-auto">
                        Seu Endereço
                    </h2>

                    <button onClick={e => setModalLocation(!modalLocation)} className="text-xl fixed top-5 right-5">
                        <IoIosArrowDown />
                    </button>

                    {userLocation &&
                        <div className="flex flex-col gap-3 mx-auto text-black border-black border-3 rounded-lg p-3 w-full max-w-2xl">
                            <h3 >R.{userLocation} </h3>
                        </div>}
                    {userLocation 
                    ? <button onClick={searchLocalization} className="flex items-center justify-center gap-3 btnDefault1-desabled fixed bottom-5 left-5 right-5 max-w-80 mx-auto">Localização encontrada <FaSearchLocation /></button>
                    : <button onClick={searchLocalization} className="flex items-center justify-center gap-3 btnDefault1 fixed bottom-5 left-5 right-5 max-w-80 mx-auto">Procurar localização <FaSearchLocation /></button>}
                </div>
            }
        </>
    )
}