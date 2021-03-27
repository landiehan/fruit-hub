import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Splash.module.css';

export default function Splash() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/welcome');
    }, 3800);
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inner_wrapper}>
          <svg
            className={styles.svg_0}
            width='60'
            height='38'
            viewBox='0 0 60 38'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9.60001 29.3404C0.755166 21.2323 0.480713 0 0.480713 0C0.480713 0 6.01609 3.18201 9.60001 5.15439C15.122 8.19333 19.3315 8.31789 23.8737 12.6877C31.2146 19.75 32.5965 37.2702 32.5965 37.2702C32.5965 37.2702 16.6026 35.7596 9.60001 29.3404Z'
              fill='#C9D52B'
            />
            <path
              d='M40.5263 24.9787C37.5424 28.8917 37.7508 37.2699 37.7508 37.2699C37.7508 37.2699 45.2948 36.2448 49.2491 33.7015C56.0172 29.3483 59.5578 15.8594 59.5578 15.8594C59.5578 15.8594 54.9273 17.7034 52.0245 19.0313C47.4272 21.1343 43.5917 20.9587 40.5263 24.9787Z'
              fill='#C9D52B'
            />
          </svg>

          <svg
            className={styles.svg_1}
            width='98'
            height='42'
            viewBox='0 0 98 42'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M47.9754 0.234863L0 18.87L47.9754 41.8664L97.1404 18.87L47.9754 0.234863Z'
              fill='#FABA14'
            />
          </svg>

          <svg
            className={styles.svg_2}
            width='33'
            height='61'
            viewBox='0 0 33 61'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M32.6491 16.3474L0.533325 0.0913086L5.68771 39.3439L32.6491 60.358V16.3474Z'
              fill='#F15C3B'
            />
          </svg>

          <svg
            className={styles.svg_3}
            width='59'
            height='102'
            viewBox='0 0 59 102'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M59 0.834961L0.319305 31.7613V101.94L50.6737 63.4806L59 0.834961Z'
              fill='#F6851F'
            />
          </svg>
        </div>

        <div className={styles.header}>
          <h1 className={styles.h1}>Fruit Hub</h1>
        </div>
      </div>
    </div>
  );
}
