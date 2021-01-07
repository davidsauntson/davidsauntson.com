import Header from './header';
import Container from './container';
import Skiplinks from './skiplinks';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Container>
        <Skiplinks />
      </Container>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
