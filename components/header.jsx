import Container from "./container";
import headerStyles from "./header.module.css";
import MainNav from "./main-nav";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <Container>
        <h1 className={headerStyles.title}>David Sauntson</h1>
      </Container>
      <div className={headerStyles.navWrapper}>
        <Container>
          <MainNav />
        </Container>
      </div>
    </header>
  );
}
