import shortid from 'shortid';
import Card from './card';
import styles from './card-list.module.css';

export default function CardList({ cards }) {
  return (
    <ul className={styles.cardList}>
      {cards.map(card => {
        return (
          <li className={styles.cardList__item} key={shortid.generate()}>
            <Card card={card} />
          </li>
        );
      })}
    </ul>
  );
}
