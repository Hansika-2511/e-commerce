import styles from './Marquee.module.css';

const TEXT =
  '✦  Premium Nightwear  ✦  Mumbai Since 2011  ✦  Disney Licensed  ✦  Marvel Collection  ✦  Peanuts Originals  ✦  Couple Sets  ✦  Made in India  ✦  Free Shipping ₹999+  ';

export default function Marquee() {
  return (
    <div className={styles.tape}>
      <span className={styles.inner}>
        {TEXT}
        {TEXT}
      </span>
    </div>
  );
}
