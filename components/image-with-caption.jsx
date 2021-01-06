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
  const innerClasses = [styles.figure__inner, 'figure__inner'];
  if (portrait) {
    innerClasses.push(styles.portrait);
  }

  const aspectRatio = height / width;

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
        <noscript>
          <img alt={altText} height={300} width={300 * aspectRatio} src={src} />
        </noscript>
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}
