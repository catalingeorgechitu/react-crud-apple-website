import { Outlet } from "react-router-dom";
import { Nav } from "../../components/Nav";
// import { HomePageProducts } from "./HomePageProducts";

export function Home() {
  return (
    <>
      <Nav />
      <div className="outlet-container lg:w-[960px] md:w-[540px] mx-auto">
        <Outlet />
      </div>
    </>
  );
}
