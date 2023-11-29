import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
import { Leftside } from "./Leftside/Leftside";
import { Rightside } from "./Rightside/Rightside";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" className="link">
          Home{" "}
        </NavLink>
        <NavLink to="/blog" className="link">
          {" "}
          Blog{" "}
        </NavLink>
        <NavLink to="/about" className="link">
          About{" "}
        </NavLink>
      </header>

      <div className="middleside">
        <Leftside />

        <main className="container">
          <Outlet />
        </main>

        <Rightside />
      </div>

      <footer>All Rights Reserved 2022-2023</footer>
    </>
  );
};

export { Layout };
