"use client";
import { FoodComponentForSearch } from "../ComponentsDefault/foodsComponent";
export const FoodsInitial = ({foods}) => {

    return (
        <div className="mt-10 mb-16">
            <h2 className="text-xl font-semibold">Mais pedidos no momento</h2>

            <div className="max-w-screen-lg mx-auto">
                {<FoodComponentForSearch variableName={foods} />}
            </div>
        </div>
    )
}