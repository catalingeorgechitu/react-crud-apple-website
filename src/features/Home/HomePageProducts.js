import { MacList } from "../Mac/macList";
import { ProductList } from "../Products/ProductList";
import { WatchList } from "../Watches/watchList";

export function HomePageProducts() {
  return (
    <>
      <ProductList />
      <MacList />
      <WatchList/>
    </>
  );
}
