import styles from '../styles/Authentication.module.css';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

export default function Welcome() {
  const [username, setUsername] = useState('');

  const ref = useRef();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    ref.current.style.transform = 'scaleY(1)';

    setTimeout(() => {
      router.push('/home');
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Authentication</title>
      </Head>

      <div className={styles.container_top}>
        <div className={styles.hero}>
          <div className={styles.hero_1}>
            <Image src='/images/fruit-drops.png' width='50' height='37' />
          </div>

          <div className={styles.hero_2}>
            <Image
              src='/images/basket-of-fruit-cartoon-2.png'
              width='301'
              height='260'
            />
          </div>

          <div className={styles.hero_shadow} />
        </div>
      </div>

      <div ref={ref} className={styles.container_bottom}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input_wrapper}>
            <label>What is your name?</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {username && <button className={styles.order}>Start Ordering</button>}
        </form>
      </div>

      <div className={styles.grow} ref={ref} />
    </div>
  );
}
