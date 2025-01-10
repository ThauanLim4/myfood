"use client";
import { HomeInitial } from "@/components/home/Home";
import { SearchInitial } from "@/components/search/Search";
import { User } from "@/components/user/User";
import { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { DataProvider } from "@/context/foodsAndStoresContext";

export default function Home() {
  return (
    <section>
      <HomeMobile />
      <HomeDesktop />
    </section>
  )
}

export const HomeMobile = () => {
  const itensClass = "flex flex-col-reverse justify-center items-center cursor-pointer";
  const [selected, setSelected] = useState(() => {
    if (typeof window === "undefined") return "home";
    return localStorage.getItem("selected") || "home";
  });

  useEffect(() => {
    localStorage.setItem("selected", selected);
  }, [selected]);

  const setItemSelected = (item) => {
    setSelected(item)
  }

  return (
    <div className="hidden max-sm:block max-md:block max-lg:block max-w-screen-lg mx-auto">
      {selected === "home" && <section className="w-full h-full">
        <DataProvider>
          <HomeInitial />
        </DataProvider>
      </section>}


      {selected === "search" && <section className="p-5 w-full h-full">
        <SearchInitial />
      </section>}

      {selected === "user" && <section className="p-5 w-full h-full">
        <User />
      </section>}



      <section className="hidden max-sm:block max-md:block">
        <nav className="w-full p-3 bg-verdeclaro fixed bottom-0">
          <ul className="flex justify-around">
            <li onClick={() => setItemSelected("home")} className={`${itensClass} ${selected === "home" ? "selected" : ""}`}>Home <AiFillHome /></li>
            <li onClick={() => setItemSelected("search")} className={`${itensClass} ${selected === "search" ? "selected" : ""}`}>Pesquisar <FaSearch /></li>
            <li onClick={() => setItemSelected("user")} className={`${itensClass} ${selected === "user" ? "selected" : ""}`}>Perfil <FaUser /></li>
          </ul>
        </nav>
      </section>
    </div>
  )

}

export const HomeDesktop = () => {
  const itensClass = "flex flex-col-reverse justify-center items-center cursor-pointer";

  return (
    <div className="block max-sm:hidden max-md:hidden max-w-screen-lg mx-auto">
      <DataProvider>
        <HomeInitial />
      </DataProvider>
    </div>
  )

}
