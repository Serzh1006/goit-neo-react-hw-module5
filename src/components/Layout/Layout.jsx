import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import css from "./layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
      <main>
        <div className={css.container}>
          <Suspense fallback={<div className={css.loading}>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
