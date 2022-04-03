import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";

export function Home() {
  return (
    <>
      <Nav />
      <div className="outlet-container lg:w-[960px] md:w-[540px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
