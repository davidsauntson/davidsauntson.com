import Link from 'next/link';
import shortid from 'shortid';

import styles from './breadcrumbs.module.css';

export default function Breadcrumbs({ crumbs }) {
  return (
    <nav aria-label="breadcrumbs">
      <ul className={styles.breadcrumbs}>
        {crumbs.map(crumb => {
          const { title, url } = crumb;
          return (
            <li className={styles.breadcrumbs__item} key={shortid.generate()}>
              {url ? (
                <Link href={url}>
                  {title}
                </Link>
              ) : (
                <span>{title}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
