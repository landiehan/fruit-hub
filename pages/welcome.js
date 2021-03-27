import styles from '../styles/Welcome.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

export default function Welcome() {
  const [className, setClassName] = useState(styles.hero_2);
  const heroRef = useRef();

  useEffect(() => {
    heroRef.current.onload = () => {
      setClassName(`${styles.hero_2} ${styles['hero_2--defer']}`);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome</title>
      </Head>
      <div className={styles.container_top}>
        <div className={styles.hero}>
          <img className={styles.hero_1} src='/images/fruit-drops.png' />

          <img
            ref={heroRef}
            className={className}
            src='/images/basket-of-fruit-cartoon.png'
          />

          <div className={styles.hero_shadow} />
        </div>
      </div>

      <div className={styles.container_bottom}>
        <header className={styles.header}>
          <h1>Get The Freshest Fruit Salad Combo</h1>
          <p>
            We deliver the best and freshest fruit salad in town. Order for a
            combo today!!!
          </p>
        </header>

        <div className={styles.continue}>
          <Link href='/authentication'>
            <a>Let's Continue</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
