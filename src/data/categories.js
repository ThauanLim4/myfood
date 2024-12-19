import "@/app/globals.css";
import Image from "next/image";
import pizzas from "@/imgs/pizzas.png";
import pratos from "@/imgs/pratosFeitos.png";
import saladas from "@/imgs/saladas.png";
import lanches from "@/imgs/lanches.png";
import doces from "@/imgs/doces.png";
import sorvetes from "@/imgs/sorvetes.png";
import bebidas from "@/imgs/bebidas.png";

export const itensCategories = [
    { id: 1, name: "Pizzas", img: <Image className="max-h-40 max-w-40" width={150} height={150} src={pizzas} alt="foto de uma pizza" />, category: "pizzas"},
    { id: 2, name: "Pratos Feitos", img: <Image className="max-h-40 max-w-40" width={150} height={150} src={pratos} alt="foto de um prato feito" />, category: "pratos-feitos"},
    { id: 3, name: "Saladas", img: <Image className="max-h-40 max-w-40" width={150} height={150} src={saladas} alt="foto de um prato de salada" />, category: "saladas"},
    { id: 4, name: "Lanches", img: <Image className="max-h-40 max-w-40" width={150} height={150} src={lanches} alt="foto de um hamburguer" />, category: "lanches" },
    { id: 5, name: "Bebidas", img: <Image className="max-h-40 max-w-40" width={150} height={150} src={bebidas} alt="foto de um hamburguer" />, category: "bebidas" },
    { id: 4, name: "Sorvetes", img: <Image className="max-h-40 max-w-40" width={150} height={150} src={sorvetes} alt="foto de um hamburguer" />, category: "sorvetes" },
    { id: 4, name: "Doces", img: <Image className="max-h-40 max-w-40" width={150} height={150} src={doces} alt="foto de um hamburguer" />, category: "doces" },
]
