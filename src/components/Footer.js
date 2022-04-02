import { CustomNavLink } from "./CustomNavLink";

export function Footer() {
  return (
    <nav className="footer-bar">
      <ul className="text-slate-100 mx-auto my-0 lg:w-[960px] md:w-[540px]">
        <li className="footer-list">
          <CustomNavLink className="px-0 py-0 mx-1 my-1 footer-text" to="/">
            <i className="fa-brands fa-apple"></i>
            <h1>Copyright © 2022 Catalin Chitu. Toate drepturile rezervate.</h1>
          </CustomNavLink>
        </li>
      </ul>
    </nav>
  );
}
