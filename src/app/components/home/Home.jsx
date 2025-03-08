import { ProductsComponent } from "./Products";
import { CategoriesComponent } from "./Categories";
import { StoresComponent } from "./Stores";
import { TabsComponent } from "./Tabs";

export const HomeComponent = () => {
    return (
        <section className="mx-auto max-w-screen-lg">
            <CategoriesComponent />

            <StoresComponent />

            <ProductsComponent />

            <TabsComponent />
        </section>
    )
}