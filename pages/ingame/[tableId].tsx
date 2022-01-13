import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/Tables.module.css';

import Footer from '../../components/Footer';
import TableCards from '../../components/scripts/tableCards';

const InGameTable: NextPage = () => {

    const router = useRouter();
    var { tableId } = router.query;

    const unique = (data: any) => { return data };

    return (
        <div className={styles.container}>
            <Head>
                <title>Deal Cte</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>CARTAS NA MESA</h1>

                <TableCards tableId={unique(tableId)} />

                <img src="/api/assets/images/cards/property-black-coopec.png" />
            </main>

            <Footer />
        </div>
    )
}

export default InGameTable