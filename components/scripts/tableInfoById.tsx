import axios from 'axios';
import { useState, useEffect } from 'react';
import { NextPage } from 'next';

import styles from '../../styles/Components.module.css';
import Link from 'next/link';

const TableInfoById: NextPage = ({ id }: { id: string }) => {

    const [ tableName, setName ] = useState("");
    const [ playerLength, setPlayerLength ] = useState(0);
    const [ username, setUsername ] = useState("Nome de usuário");

    useEffect(() => {
        async function getData() {
            var data = await (await axios.get(`http://localhost:3000/api/table/fetch/id/${id}`)).data;
            console.log(data);
            setName(`Mesa de ${data.players[0].name}`);
            setPlayerLength(data.players.length);

            var card_request = await (await axios.get(`http://localhost:3000/api/table/fetch/cards/${data.deck[0].id}`)).data;

            console.log(card_request);
        } getData();
    }, [id]);

    async function formSubmit(event: any) {
        event.preventDefault();
        var req = (await axios.get(`http://localhost:3000/api/table/players/${id}/${username}/create`)).data;

        console.log(req)
    }

    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h1>{tableName}</h1>
            </div>

            <div>
                <h2>{playerLength}/4 jogadores</h2>
            </div>
            
            <div>
                <form onSubmit={formSubmit}>
                    <input type="text" value={username} className={styles.usernameInput} onChange={(key) => { setUsername(key.target.value) }} />
                </form>
            </div>
        </main>
    )
}

export default TableInfoById