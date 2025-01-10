import { useEffect, useState } from "react";
import { fetchAllUsers } from "@/app/api/utils/utilitys";

export const ShowLocationComponent = () => {
    const [userToken, setUserToken] = useState("");
    const [userLocation, setUserLocation] = useState("");

    useEffect(() => {
        setUserLocation(() => JSON.parse(localStorage.getItem("location")) || "")
        const token = localStorage.getItem("token");
        if (userLocation.length === 0) {

            setUserToken(token);
            const fetchLocation = async () => {
                try {
                    const response = await fetchAllUsers();
                    const resultFilted = response.find((e) => e.authentication_key === token);
                    if (resultFilted.lenght < 1) {
                        console.log("o usuário não possuíuma localização");
                    }
                    const loc = resultFilted.address;
                    setUserLocation(loc)
                    localStorage.setItem("location", JSON.stringify(loc))
                } catch (erro) {
                    console.log("erro ao buscar endereço do usuário", erro);
                }
            };
            fetchLocation();
        }
    }, []);
    return (
        <div className="flex items-center">
            <div className="flex flex-col gap-3 text-verdeescuro bg-verdeclaro p-3 w-full border-black border-3 rounded-lg mx-auto">

                {userLocation &&
                    <div className="flex flex-col gap-3 mx-auto text-black p-3 w-full max-w-2xl">
                        <h3 >R.{userLocation} </h3>
                    </div>}
            </div>

        </div>
    );
}