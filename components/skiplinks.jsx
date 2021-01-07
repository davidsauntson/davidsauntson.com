import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './skiplinks.module.css';

export default function Skiplinks() {
  const router = useRouter();
  const currentUrl = router.pathname;
  return (
    <nav aria-label="skip links">
      <Link href={`${currentUrl}#main-content`}>
        <a className={styles.skiplink}>Skip to main content</a>
      </Link>
      <Link href={`${currentUrl}#footer`}>
        <a className={styles.skiplink}>Skip to footer</a>
      </Link>
    </nav>
  );
}
