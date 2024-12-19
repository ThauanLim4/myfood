"use client";
import { NavigationBar } from "@/components/NavigationBar";
import { HomeInitial } from "@/components/home/Home";
import { FoodsInitial } from "@/components/home/Foods";
import { StoresInitial } from "@/components/home/Stores";


export default function Home() {

  return (
    <div className="max-w-screen-lg mx-auto">
      <section className="p-5 w-full h-full">
        <HomeInitial />
      </section>
      <section className="max-sm:flex hidden fixed bottom-0 w-full right-0 left-0 border-t-2 border-gray-500/25">
        <NavigationBar />
      </section>

      <section className="p-5 h-full mb-20">
        <StoresInitial />
      </section>

      <section className="p-5 h-full mb-20">
        <FoodsInitial />
      </section>


    </div>
  )
}
