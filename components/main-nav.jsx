import Link from "next/link";
import navStyles from "./main-nav.module.css";

const MainNav = () => {
  return (
    <nav aria-label="Main menu" className={navStyles.nav}>
      <ul className={[navStyles.nav__list].join(" ")}>
        <li className={navStyles.nav__item}>
          <Link className={navStyles.nav__link} href="/">
            <a className={navStyles.nav__link}>Home</a>
          </Link>
        </li>
        <li className={navStyles.nav__item}>
          <Link href="/projects">
            <a className={navStyles.nav__link}>Projects</a>
          </Link>
        </li>
        <li className={navStyles.nav__item}>
          <Link href="/texts-from-my-sister">
            <a className={navStyles.nav__link}>Texts from my sister</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
