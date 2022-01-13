import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/Tables.module.css';

import Footer from '../../bin/components/footer';

import TableInfoById from '../../bin/components/scripts/tableInfoById';

const Tables: NextPage = () => {

    const router = useRouter();
    var { tableId } = router.query;

    const uniqueId = (data: any) => { return data };

    return (
        <div className={styles.container}>
            <Head>
                <title>Deal Cte</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TableInfoById id={uniqueId(tableId)} />

            <Footer />
        </div>
    )
}

export default Tables
