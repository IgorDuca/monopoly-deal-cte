import { useEffect, useState } from "react";
import dataGatherer from './dataGatherer';
import Image from 'next/image';

import styles from '../../../styles/Home.module.css';

export default function TableCards({ tableId }: { tableId: string; }): JSX.Element {
    var [ cards, setCards ] = useState([
        {
            pic_url: "",
            id: ""
        }
    ]);
    const [ isTableUndefined, setUndefined ] = useState(false);

    useEffect(() => {
        async function getData() {
            var unique = (data: any) => { return data };
            var table = await dataGatherer.getTableInfo(unique(tableId));
            if(table === null || undefined) setUndefined(true);
            var cards = await dataGatherer.getTableCards(unique(tableId));
            console.log(cards)

            cards.map((card: any) => {
                setCards((cards) => [...cards, {
                    pic_url: card.pic_url,
                    id: card.id
                }]);
            });

            document.getElementsByClassName("generated_card")[0].innerHTML = ""
        } getData();
    }, [tableId]);

    if(isTableUndefined === true) {
        return (
            <main className={styles.main}>
                <h1 className={styles.title}>PARTIDA NÃO ENCONTRADA</h1>
            </main>
        )
    } else {
        return (
            <div>
                <div className={styles.grid}>
                    {
                        cards.map(card => {
                            console.log(card)
    
                            return (
                                <div key={card.id} className="generated_card">
                                    <img src={`http://localhost:3000${card.pic_url}`} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}