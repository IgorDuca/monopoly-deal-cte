import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Tables.module.css';

import Footer from '../../bin/components/footer';
import TableFetcher from '../../bin/components/scripts/tableFetcher';

const Tables: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deal Cte</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Mesas de jogo</h1>

        <TableFetcher />
      </main>

      <Footer />

    </div>
  )
}

export default Tables
