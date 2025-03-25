"use client"
import { HeaderComponent } from "@/components/header/Header";
import { HomeComponent } from "@/app/components/home/Home";
import { register } from "swiper/element/bundle";
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {

  return (
    <section>
      <HeaderComponent />

      <HomeComponent />
    </section>
  )
}