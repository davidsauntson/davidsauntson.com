import Container from './container';

import toolStyles from './tools.module.css';
import headerStyles from './header.module.css';

export default function Header() {
  return (
    <header className={[toolStyles.stripes, headerStyles.header].join(' ')}>
      <Container>
        <h1 className={headerStyles.title}>David Sauntson</h1>
      </Container>
      <div className={headerStyles.navWrapper}>
        <Container />
      </div>
    </header>
  );
}
