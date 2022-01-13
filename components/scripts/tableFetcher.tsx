import axios from 'axios';
import { useState, useEffect } from 'react';
import { NextPage } from 'next';

import styles from '../../styles/Components.module.css';
import Link from 'next/link';

type tableType = {
    id: string,
    players: any[],
    deck: any[],
    turn: number,
    logs: any[],
    name: string
}

const TableFetcher: NextPage = () => {

    var [ tables, setTables ] = useState([
        {
            id: "",
            playerLength: 0,
            turn: 0,
            name: ""
        }
    ])

    useEffect(() => {
        async function getData() {
            var tables = (await axios.get<tableType[]>('/api/table/fetch')).data;
    
            console.log(tables)
    
            tables.map(table => {
                setTables((tables) => [...tables, {
                    id: table.id,
                    playerLength: table.players.length,
                    turn: table.turn,
                    name: `Mesa de ${table.players[0].name}`
                }]);
            });
        };

        getData();

        document.getElementsByClassName("tables")[0].innerHTML = ""

        console.log(tables)
    }, [])


    return (
        <div id="TableHolder" style={{marginTop: 30}} className={styles.grid} >
            {
                tables.map(table => (
                    <Link href={`/tables/${table.id}`} >
                        <div className="tables" style={{marginRight: 10, marginBottom: 20}} >
                            <button className={styles.tableButton} >{table.name}</button>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default TableFetcher