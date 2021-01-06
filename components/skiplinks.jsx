import Link from 'next/link';
import styles from './skiplinks.module.css';

export default function Skiplinks() {
  return (
    <nav aria-label="skip links">
      <Link href="#main-content">
        <a className={styles.skiplink}>Skip to main content</a>
      </Link>
      <Link href="#footer">
        <a className={styles.skiplink}>Skip to footer</a>
      </Link>
    </nav>
  );
}
