"use client";
import "@/app/globals.css";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export const NavigationBar = () => {
    const itensClass = "flex flex-col-reverse justify-center items-center cursor-pointer";
    const [selected, setSelected] = useState("home");

    const setItemSelected = (item) => {
        setSelected(item)
    }

    return (
        <nav className="w-full p-3 bg-verdeclaro fixed bottom-0">
            <ul className="flex justify-around">
                <li onClick={() => setItemSelected("home")} className={`${itensClass} ${selected === "home" ? "selected" : ""}`}>Home <AiFillHome /></li>
                <li onClick={() => setItemSelected("search")} className={`${itensClass} ${selected === "search" ? "selected" : ""}`}>Pesquisar <FaSearch /></li>
                <li onClick={() => setItemSelected("perfil")} className={`${itensClass} ${selected === "perfil" ? "selected" : ""}`}>Perfil <FaUser /></li>
            </ul>
        </nav>
    )
}