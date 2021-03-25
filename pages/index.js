import Head from 'next/head';
import Splash from './splash';

export default function Entry() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Splash />
    </>
  );
}
