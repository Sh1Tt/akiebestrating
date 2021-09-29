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
  )
}