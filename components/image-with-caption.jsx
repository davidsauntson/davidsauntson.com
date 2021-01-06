import Image from 'next/image';
import styles from './image-with-caption.module.css';
import toolStyles from './tools.module.css';

export default function ImageWithCaption({ src, caption, altText }) {
  return (
    <figure className={[styles.figure, toolStyles.stripes].join(' ')}>
      <div className={styles.figure__inner}>
        <Image
          className={styles.image}
          src={src}
          alt={altText}
          layout="responsive"
          width={1440}
          height={900}
        />
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}
