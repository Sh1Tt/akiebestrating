import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Akie Bestrating</title>
        <meta name="description" content="Online planning and registration app for Akie Bestrating VOF" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Here comes the Akie App..
        </h1>

        <p className={styles.description}>
          Powered by Handshake
        </p>
      </main>
    </div>
  )
}