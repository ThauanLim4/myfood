"use client"
import { HeaderComponent } from "@/components/header/Header";
import { HomeComponent } from "@/app/components/home/Home";
import { register } from "swiper/element/bundle";
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { TabsComponent } from "./components/home/Tabs";
import { SearchTabComponent } from "./components/search/Search";
import { UserTabComponent } from "./components/user/User";
import { createContext, useContext, useState } from "react";
export default function Home() {

  return (
    <section>
      <HeaderComponent />

      <HomeComponent />

      <SearchTabComponent />

      <UserTabComponent />
    </section>
  )
}