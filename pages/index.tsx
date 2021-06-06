import Head from 'next/head';
import Link from 'next/link';
import { Button, ButtonGroup } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NGS Tools</title>
        <meta name="description" content="Phantasy Star Online 2 New Genesis Player Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to PSO2:NGS Tools!
        </h1>

        <p>
          <ButtonGroup>
            <Link href="./en/map">
              <Button>
                World Map (EN)
              </Button>
            </Link>
            <Link href="./jp/map">
              <Button>
                World Map (JP)
              </Button>
            </Link>
          </ButtonGroup>
          
        </p>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
