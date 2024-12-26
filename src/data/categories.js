import "@/app/globals.css";
import Image from "next/image";
import pizzas from "@/imgs/pizzas.png";
import pratos from "@/imgs/pratosFeitos.png";
import lanches from "@/imgs/lanches.png";
import doces from "@/imgs/doces.png";
import sorvetes from "@/imgs/sorvetes.png";
import bebidas from "@/imgs/bebidas.png";

export const itensCategories = [
    { id: 1, name: "Pizzas", img: <Image className="max-h-40 max-w-40" width={150} height={150} src={pizzas} alt="foto de uma pizza" />, category: "pizzaria"},

    { id: 2, name: "Pratos Feitos", img: <Image className="max-h-40 max-w-40" width={150} height={150} src={pratos} alt="foto de um prato feito" />, category: "restaurante"},

    { id: 4, name: "Lanches", img: <Image className="max-h-40 max-w-40" width={150} height={150} src={lanches} alt="foto de um hamburguer" />, category: "lanchonete" },

    { id: 5, name: "Bebidas", img: <Image className="max-h-40 max-w-40" width={150} height={150} src={bebidas} alt="foto de um hamburguer" />, category: "bebidaria" },

    { id: 4, name: "Sorvetes", img: <Image className="max-h-40 max-w-40" width={150} height={150} src={sorvetes} alt="foto de um hamburguer" />, category: "sorvetearia" },
    { id: 4, name: "Doces", img: <Image className="max-h-40 max-w-40" width={150} height={150} src={doces} alt="foto de um hamburguer" />, category: "docearia" },
]
