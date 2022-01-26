import Head from 'next/head'

import Image from 'next/image'

import styles from '../styles/Home.module.css'

import backgroundSrc from '../public/images/background-xmas.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Akie Bestrating</title>
        <meta name="description" content="Online planning and registration app for Akie Bestrating VOF" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <div className={styles.container}>
        <main className={styles.main}>
          <div id="xmas"></div> 
          <div className={styles.background}>
            <Image 
              src={backgroundSrc} 
              alt="X-mas background"
            />
          </div>
          <h1 className={styles.title}>
            Here comes the Akie App..
          </h1>
          <p className={styles.text}>
            Powered by:
          </p>
          <div className={styles.references}>
            <h2 className={styles.reference}>
              Vercel
            </h2>
            <p className={styles.and}>
              &
            </p>
            <h2 className={styles.reference}>
              Handshake
            </h2>
          </div>
        </main>
      </div>
    </>
  )
}