import axios from 'axios';

class dataGatherer {
    public async getTableInfo(tableId: string) {
        var data = await (await axios.get(`/api/table/fetch/id/${tableId}`)).data;
        console.log(data);

        return data;
    };

    public async getTableCards(tableId: string) {
        var deckId = await (await axios.get(`/api/table/fetch/id/${tableId}`)).data.id;

        console.log(deckId);

        return await (await axios.post(`/api/table/fetch/cards/${deckId}`, {
            isPlayed: true
        })).data;
    };

    public async getPlayerCards(tableId: string, playerId: string) {
        var deckId = await (await axios.get(`/api/table/fetch/id/${tableId}`)).data.id;

        console.log(deckId);

        var cards = await (await axios.post(`/api/table/fetch/cards/${deckId}`, {
            isPlayed: false
        })).data;

        var finalCards: any[] = [];
        cards.forEach((card: any) => {
            if(card.playerId === playerId) finalCards.push(card);
        });

        return finalCards;
    }
}

export default new dataGatherer()