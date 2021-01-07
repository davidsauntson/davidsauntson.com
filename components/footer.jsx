import Link from 'next/link';
import Container from './container';

import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <small>This website is a cookie free zone.</small>
        <small>
          <Link href="mailto:david@davidsauntson.com">
            Get in touch - email me on david@davidsauntson.com
          </Link>
        </small>

        <small>&copy; David Sauntson</small>
      </Container>
    </footer>
  );
}
