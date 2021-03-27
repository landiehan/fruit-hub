import styles from '../styles/Authentication.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export default function Welcome() {
  const [username, setUsername] = useState('');

  const ref = useRef();
  const imageRef = useRef();
  const router = useRouter();

  const [className, setClassName] = useState(styles.hero_2);
  useEffect(() => {
    imageRef.current.onload = () => {
      setClassName(`${styles.hero_2} ${styles['hero_2--defer']}`);
    };
  });

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
          <img className={styles.hero_1} src='/images/fruit-drops.png' />

          <img
            ref={imageRef}
            className={className}
            src='/images/basket-of-fruit-cartoon-2.png'
          />

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
