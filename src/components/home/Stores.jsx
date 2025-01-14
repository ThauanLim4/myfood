import "@/app/globals.css";
import { StoreComponent } from "../ComponentsDefault/storeComponents";

export const StoresInitial = ({stores}) => {
    return (
        <div className="mt-10">
            <h2 className="text-xl font-semibold">Lojas disponiveis</h2>

            <div className="mx-auto max-w-screen-lg">
                {<StoreComponent variableName={stores} />}
            </div>
        </div>
    )
}