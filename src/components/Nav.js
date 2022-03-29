// import { useSearchParams } from "react-router-dom";
import { useAuthContext } from "../features/Auth/Auth.context";
import { CustomNavLink } from "./CustomNavLink";

export function Nav() {
  const { user, logout } = useAuthContext();
  return (
    <nav className="nav-bar">
      <ul className="flex list-none text-slate-100 mx-auto my-0 lg:w-[960px] md:w-[540px]">
        <li>
          <CustomNavLink className="pl-auto" to="/">
            <i className="fa-brands fa-apple"></i>
          </CustomNavLink>
        </li>
        {/* ----- To be deleted -----  */}
        {/* <li>
          <CustomNavLink to="/counter">Counter</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/weather">Weather</CustomNavLink>
        </li> */}
        {/* <li>
          <CustomNavLink to="/todos">Todos</CustomNavLink>
        </li> */}
        {/* ----- To be deleted -----  */}
        {/* <li>
          <CustomNavLink to="/movies">Movies</CustomNavLink>
        </li> */}
        <li>
          <CustomNavLink to="/products">iPhones</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/macs">Mac</CustomNavLink>
        </li>

        <li>
          <CustomNavLink to="/cart">
            <i className="mr-auto fa-solid fa-bag-shopping"></i>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/settings">
            <i className="fa-solid fa-gear"></i>
          </CustomNavLink>
        </li>

        {user && (
          <li className="p-3 ml-auto">
            Hi, <strong>{user.firstName} ! </strong>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
              className="p-3"
            >
              Logout
            </a>
          </li>
        )}
        {!user && (
          <>
            <li className="ml-auto">
              <CustomNavLink to="/login">Login</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/register">Register</CustomNavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
