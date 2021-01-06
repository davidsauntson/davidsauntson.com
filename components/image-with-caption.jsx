import Image from 'next/image';

import styles from './image-with-caption.module.css';

export default function ImageWithCaption({
  src,
  caption,
  altText,
  width,
  height,
  portrait
}) {
  const innerClasses = [styles.figure__inner];
  if (portrait) {
    innerClasses.push(styles.portrait);
  }

  return (
    <figure className={styles.figure}>
      <div className={innerClasses.join(' ')}>
        <Image
          className={styles.image}
          src={src}
          alt={altText}
          layout="responsive"
          width={width}
          height={height}
        />
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}
