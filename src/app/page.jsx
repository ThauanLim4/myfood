import { Navbar } from "@/components/navbar";
import { NavigationBar } from "@/components/NavigationBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="border-b-2 border-gray-500/25">
        <Navbar />
      </section>
      <section className="p-5 w-full h-full">
        <div>categorias</div>
        <div>banner</div>
        <div>area das comidas</div>
      </section>
      <section className="max-sm:flex hidden fixed bottom-0 w-full right-0 left-0 border-t-2 border-gray-500/25">
        <NavigationBar />
      </section>
    </div>
  )
}
