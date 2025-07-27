import Link from 'next/link';

import styles from './card.module.css';

export default function Card({ card: { title, stub } }) {
  return (
    <Link className={styles.card} href={`/projects/${stub}`}>
      {title}
    </Link>
  );
}
