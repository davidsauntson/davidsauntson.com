import Link from 'next/link';

import styles from './card.module.css';

export default function Card({ card: { title, stub } }) {
  return (
    <Link href={`/projects/${stub}`}>
      <a className={styles.card}>{title}</a>
    </Link>
  );
}
