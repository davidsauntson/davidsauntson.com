import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './skiplinks.module.css';

export default function Skiplinks() {
  const router = useRouter();
  const currentUrl = router.pathname;
  return (
    <nav aria-label="skip links">
      <Link className={styles.skiplink} href={`${currentUrl}#main-content`}>
        Skip to main content
      </Link>
      <Link className={styles.skiplink} href={`${currentUrl}#footer`}>
        Skip to footer
      </Link>
    </nav>
  );
}
