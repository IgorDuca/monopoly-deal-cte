import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import styles from '../../../styles/Tables.module.css';
import Footer from '../../../bin/components/footer';
import TableCards from '../../../bin/components/scripts/tableCards';
import dataGatherer from '../../../bin/components/scripts/dataGatherer';
import playerInfo from '../../../bin/components/scripts/playerInfo';

import { PlayerType } from '../../../bin/components/types/playerType';

const InGameTable: NextPage = () => {

    const router = useRouter();
    var { tableId, playerId } = router.query;

    const [ turn, setTurn ] = useState('');

    const unique = (data: any) => { return data };

    useEffect(() => {
        async function getData() {
            var tableData = await dataGatherer.getTableInfo(unique(tableId));
            setTurn(tableData.turn);

            var pInfo: PlayerType = await playerInfo(tableData, unique(playerId));
            console.log(pInfo)
        } getData();
    }, [tableId])

    return (
        <div className={styles.container}>
            <Head>
                <title>Deal Cte</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>CARTAS NA MESA</h1>

                <h2>{turn}º turno</h2>

                <TableCards tableId={unique(tableId)} />
            </main>

            <Footer />
        </div>
    )
}

export default InGameTable