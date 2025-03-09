import { Link } from "react-router-dom";
import css from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.navigate}>
      <Link className={css.linkNav} to="/">
        Home
      </Link>
      <Link className={css.linkNav} to="/movies">
        Movies
      </Link>
    </nav>
  );
};

export default Navigation;
