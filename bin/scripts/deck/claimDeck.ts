/* 
    Deck cards:
    28 properties: 2x brown, 3x cyan, 3x pink, 3x orange, 3x red, 3x yellow, 3x green, 2x blue, 4x black, 2x teal. 
    
    11x wild cards: 1x brown/cyan, 1x cyan/black, 2x orange,pink, 2x red/yellow, 1x blue/dark-green, 1x green/black, 1x black/teal, 2x wild.

    34x action cards: 2x deal breaker, 3x forced deal, 3x sly deal, 3x just say no, 3x debt collector, 3x birthday, 2x double the rent, 3x house, 2x hotel, 10x pass go.

    13x rent cards: 2x cyan/brown, 2x pink/orange, 2x red/yellow, 2x blue/dark-green, 2x black/teal, 3x rent all.

    20x money cards: 6x 1m, 5x 2m, 3x 3m, 3x 4m, 2x 5m, 1x 10m.
*/

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

import cardShuffler from "../cards/cardShuffler";

import { deckType } from "../../types/gameAssets/deckType";
import { dbCardType } from '../../types/gameAssets/dbCardType';

import createLogs from '../logs/creteLog'

class claimDeck {
    public async shuffleDeck(tableId: string): Promise<any> {
        var parsed_cards: dbCardType[] = [];
        var all_cards: any[] = [];

        var card_counts = {
            money: 0,
            property: 0,
            rent: 0,
            wild: 0,
            action: 0
        }
        
        cardShuffler.shuffleProperties().forEach(card => { all_cards.push(card) });
        cardShuffler.shuffleWilds().forEach(card => { all_cards.push(card) });
        cardShuffler.shuffleActions().forEach(card => { all_cards.push(card) });
        cardShuffler.shuffleRent().forEach(card => { all_cards.push(card) });
        cardShuffler.shuffleMoney().forEach(card => { all_cards.push(card) });

        var newDeck = await prisma.deck.create({
            data: {
                tableId: tableId
            }
        });

        all_cards.forEach(card => {
            parsed_cards.push({
                deckId:   newDeck.id,
                color:    card.color,
                pic_url:  card.pic_url,
                type:     card.type,
                value:    card.value
            })
        });
        
        console.log(parsed_cards);

        var parsed = parsed_cards.map(card => {
            return {
                deckId:   card.deckId,
                color:    card.color,
                pic_url:  card.pic_url,
                type:     card.type,
                value:    card.value
            }
        });

        await prisma.card.createMany({
            data: parsed
        });

        await createLogs.createDeck(tableId);

        return { deck: newDeck, card_amount: parsed_cards.length };
    }
}

export default new claimDeck();
