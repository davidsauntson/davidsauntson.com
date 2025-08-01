import Link from "next/link";
import navStyles from "./main-nav.module.css";

const MainNav = () => {
  return (
    <nav aria-label="Main menu" className={navStyles.nav}>
      <ul className={[navStyles.nav__list].join(" ")}>
        <li className={navStyles.nav__item}>
          <Link className={navStyles.nav__link} href="/">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
