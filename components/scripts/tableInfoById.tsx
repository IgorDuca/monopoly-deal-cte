import axios from 'axios';
import { useState, useEffect } from 'react';
import { NextPage } from 'next';

import styles from '../../styles/Components.module.css';
import Link from 'next/link';

import { FiAlertCircle } from 'react-icons/fi';

import dataGatherer from './dataGatherer';

function TableInfoById({ id }: { id: string; }): JSX.Element {

    const [tableName, setName] = useState("");
    const [playerLength, setPlayerLength] = useState(0);
    const [username, setUsername] = useState("Nome de usuário");
    const [ isTableFull, setTableStatus ] = useState(false);

    useEffect(() => {
        async function getData() {

            var tableData = await dataGatherer.getTableInfo(id);
            setName(`Mesa de ${tableData.players[0].name}`);
            setPlayerLength(tableData.players.length);
        } getData();
    }, [id]);

    async function formSubmit(event: any) {
        event.preventDefault();
        var req = (await axios.get(`/api/table/players/${id}/${username}/create`)).data;

        console.log(req);
    }

    function ErrorLooker() {
        if(playerLength >= 4) {
            setTableStatus(true);
            return (
                <div className={styles.isTableFullDiv} >
                    <h2>PARTIDA CHEIA! <FiAlertCircle /></h2>
                </div>
            )
        } else return ( <div></div> )
    }

    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h1>{tableName}</h1>
            </div>

            <div>
                <h2>{playerLength}/4 jogadores</h2>
            </div>

            <ErrorLooker />

            <div>
                <form onSubmit={formSubmit}>
                    <input type="text" id="username_input" value={username} className={styles.usernameInput} onChange={(key) => { setUsername(key.target.value); } } disabled={isTableFull} />
                </form>
            </div>
        </main>
    );
}

export default TableInfoById