import Header from './header';
import Container from './container';
import Skiplinks from './skiplinks';

export default function Layout({ children }) {
  return (
    <>
      <Container>
        <Skiplinks />
      </Container>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
