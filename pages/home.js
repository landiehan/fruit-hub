import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useRef, useEffect } from 'react';

const combos = [
  {
    name: 'Honey lime combo',
    image: '/images/combos/Honey-Lime-Peach-Fruit-Salad.png',
    price: 2000,
    liked: false,
  },
  {
    name: 'Berry mango combo',
    image: '/images/combos/Glowing-Berry-Fruit-Salad.png',
    price: 8000,
    liked: false,
  },
];

export default function Home() {
  const [className, setClassName] = useState(styles.image);
  const imageRef = useRef();
  useEffect(() => {
    setClassName(`${styles.image} ${styles['image--defer']}`);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <header className={styles.header}>
          <div className={styles.flex}>
            <button className={styles.menu}>
              <svg
                width='22'
                height='11'
                viewBox='0 0 22 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0 1.375C0 1.01033 0.144866 0.660591 0.402728 0.402728C0.660591 0.144866 1.01033 0 1.375 0H20.625C20.9897 0 21.3394 0.144866 21.5973 0.402728C21.8551 0.660591 22 1.01033 22 1.375C22 1.73967 21.8551 2.08941 21.5973 2.34727C21.3394 2.60513 20.9897 2.75 20.625 2.75H1.375C1.01033 2.75 0.660591 2.60513 0.402728 2.34727C0.144866 2.08941 0 1.73967 0 1.375Z'
                  fill='#070648'
                />
                <path
                  d='M1.375 8.25C1.01033 8.25 0.660591 8.39487 0.402728 8.65273C0.144866 8.91059 0 9.26033 0 9.625C0 9.98967 0.144866 10.3394 0.402728 10.5973C0.660591 10.8551 1.01033 11 1.375 11H12.375C12.7397 11 13.0894 10.8551 13.3473 10.5973C13.6051 10.3394 13.75 9.98967 13.75 9.625C13.75 9.26033 13.6051 8.91059 13.3473 8.65273C13.0894 8.39487 12.7397 8.25 12.375 8.25H1.375Z'
                  fill='#070648'
                />
              </svg>
            </button>

            <button className={styles.basket}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M22.5 10.2857C22.9141 10.2857 23.2676 10.4531 23.5605 10.7879C23.8535 11.1228 24 11.5268 24 12C24 12.4732 23.8535 12.8772 23.5605 13.2121C23.2676 13.5469 22.9141 13.7143 22.5 13.7143H22.3242L20.9766 22.5804C20.9141 22.9911 20.7422 23.3304 20.4609 23.5982C20.1797 23.8661 19.8594 24 19.5 24H4.5C4.14062 24 3.82031 23.8661 3.53906 23.5982C3.25781 23.3304 3.08594 22.9911 3.02344 22.5804L1.67578 13.7143H1.5C1.08594 13.7143 0.732422 13.5469 0.439453 13.2121C0.146484 12.8772 0 12.4732 0 12C0 11.5268 0.146484 11.1228 0.439453 10.7879C0.732422 10.4531 1.08594 10.2857 1.5 10.2857H22.5ZM5.68359 21C5.88672 20.9821 6.05664 20.8817 6.19336 20.6987C6.33008 20.5156 6.39062 20.308 6.375 20.0759L6 14.5045C5.98438 14.2723 5.89648 14.0781 5.73633 13.9219C5.57617 13.7656 5.39453 13.6964 5.19141 13.7143C4.98828 13.7321 4.81836 13.8326 4.68164 14.0156C4.54492 14.1987 4.48438 14.4062 4.5 14.6384L4.875 20.2098C4.89062 20.433 4.9707 20.6205 5.11523 20.7723C5.25977 20.9241 5.42969 21 5.625 21H5.68359ZM10.5 20.1429V14.5714C10.5 14.3393 10.4258 14.1384 10.2773 13.9688C10.1289 13.7991 9.95312 13.7143 9.75 13.7143C9.54688 13.7143 9.37109 13.7991 9.22266 13.9688C9.07422 14.1384 9 14.3393 9 14.5714V20.1429C9 20.375 9.07422 20.5759 9.22266 20.7455C9.37109 20.9152 9.54688 21 9.75 21C9.95312 21 10.1289 20.9152 10.2773 20.7455C10.4258 20.5759 10.5 20.375 10.5 20.1429ZM15 20.1429V14.5714C15 14.3393 14.9258 14.1384 14.7773 13.9688C14.6289 13.7991 14.4531 13.7143 14.25 13.7143C14.0469 13.7143 13.8711 13.7991 13.7227 13.9688C13.5742 14.1384 13.5 14.3393 13.5 14.5714V20.1429C13.5 20.375 13.5742 20.5759 13.7227 20.7455C13.8711 20.9152 14.0469 21 14.25 21C14.4531 21 14.6289 20.9152 14.7773 20.7455C14.9258 20.5759 15 20.375 15 20.1429ZM19.125 20.2098L19.5 14.6384C19.5156 14.4062 19.4551 14.1987 19.3184 14.0156C19.1816 13.8326 19.0117 13.7321 18.8086 13.7143C18.6055 13.6964 18.4238 13.7656 18.2637 13.9219C18.1035 14.0781 18.0156 14.2723 18 14.5045L17.625 20.0759C17.6094 20.308 17.6699 20.5156 17.8066 20.6987C17.9434 20.8817 18.1133 20.9821 18.3164 21H18.375C18.5703 21 18.7402 20.9241 18.8848 20.7723C19.0293 20.6205 19.1094 20.433 19.125 20.2098ZM5.57812 3.91071L4.48828 9.42857H2.94141L4.125 3.52232C4.27344 2.73661 4.62109 2.09598 5.16797 1.60045C5.71484 1.10491 6.33984 0.857143 7.04297 0.857143H9C9 0.625 9.07422 0.424107 9.22266 0.254464C9.37109 0.0848214 9.54688 0 9.75 0H14.25C14.4531 0 14.6289 0.0848214 14.7773 0.254464C14.9258 0.424107 15 0.625 15 0.857143H16.957C17.6602 0.857143 18.2852 1.10491 18.832 1.60045C19.3789 2.09598 19.7266 2.73661 19.875 3.52232L21.0586 9.42857H19.5117L18.4219 3.91071C18.3359 3.51786 18.1582 3.19643 17.8887 2.94643C17.6191 2.69643 17.3086 2.57143 16.957 2.57143H15C15 2.80357 14.9258 3.00446 14.7773 3.17411C14.6289 3.34375 14.4531 3.42857 14.25 3.42857H9.75C9.54688 3.42857 9.37109 3.34375 9.22266 3.17411C9.07422 3.00446 9 2.80357 9 2.57143H7.04297C6.69141 2.57143 6.38086 2.69643 6.11133 2.94643C5.8418 3.19643 5.66406 3.51786 5.57812 3.91071Z'
                  fill='#FFA451'
                />
              </svg>
              <span>My basket</span>
            </button>
          </div>

          <h1 className={styles.h1}>
            Hello, What fruit salad combo do you want today?
          </h1>

          <div className={styles.flex}>
            <input
              className={styles.search}
              placeholder={'Search for fruit salad combos'}
            />
            <button className={styles.filter}>
              <svg
                width='26'
                height='17'
                viewBox='0 0 26 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <line
                  x1='8'
                  y1='4'
                  x2='24'
                  y2='4'
                  stroke='#070648'
                  stroke-width='2'
                  stroke-linecap='round'
                />
                <line
                  x1='18'
                  y1='13'
                  x2='2'
                  y2='13'
                  stroke='#070648'
                  stroke-width='2'
                  stroke-linecap='round'
                />
                <circle cx='4' cy='4' r='3.5' stroke='#070648' />
                <circle
                  cx='22'
                  cy='13'
                  r='3.5'
                  transform='rotate(-180 22 13)'
                  stroke='#070648'
                />
              </svg>
            </button>
          </div>
        </header>

        <section>
          <h2 className={styles.h2}>Recommended Combo</h2>
          <ul className={styles.combos}>
            {combos.map((combo, index) => (
              <li key={index} className={styles.combo}>
                <img ref={imageRef} src={combo.image} className={className} />
                <span className={styles.name}>{combo.name}</span>
                <div className={styles.footer}>
                  <span className={styles.price}>{combo.price}</span>
                  <button className={styles.add}>
                    <img src='/add.svg' alt='add' />
                  </button>
                </div>
                <button className={styles.like}>
                  <img src='heart.svg' alt='like' />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
