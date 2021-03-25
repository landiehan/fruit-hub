import styles from '../styles/Welcome.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Welcome() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome</title>
      </Head>
      <div className={styles.container_top}>
        <div className={styles.hero}>
          <div className={styles.hero_1}>
            <Image src='/images/fruit-drops.png' width='50' height='37' />
          </div>

          <div className={styles.hero_2}>
            <Image
              src='/images/basket-of-fruit-cartoon.png'
              width='301'
              height='260'
            />
          </div>

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
