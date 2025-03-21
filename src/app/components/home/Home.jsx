import { ProductsComponent } from "./Products";
import { CategoriesComponent } from "./Categories";
import { StoresComponent } from "./Stores";
import { SearchInputComponent } from "@/components/header/SearchInput";

export const HomeComponent = () => {
    return (
        <section className="mx-auto max-w-screen-lg">
            <div className="max-sm:block hidden">
                <SearchInputComponent />
            </div>

            <CategoriesComponent />

            <StoresComponent />

            <ProductsComponent />
        </section>
    )
}