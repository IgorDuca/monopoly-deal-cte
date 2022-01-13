import { useEffect, useState } from "react";
import dataGatherer from './dataGatherer';
import Image from 'next/image';

import styles from '../../styles/Home.module.css';

export default function TableCards({ tableId }: { tableId: string; }): JSX.Element {

    var [ cards, setCards ] = useState([
        {
            pic_url: "",
            id: ""
        }
    ]);

    useEffect(() => {
        async function getData() {
            var unique = (data: any) => { return data };
            var cards = await dataGatherer.getTableCards(unique(tableId));
            console.log(cards)

            cards.map((card: any) => {
                setCards((cards) => [...cards, {
                    pic_url: card.url,
                    id: card.id
                }]);
            });
        } getData();

        console.log(cards)
    }, [])

    return (
        <div>
            <div className={styles.grid}>
                {
                    cards.map(card => (
                        <div key={card.id}>
                            <img src={card.pic_url} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}