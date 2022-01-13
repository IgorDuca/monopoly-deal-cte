import axios from 'axios';

class dataGatherer {
    public async getTableInfo(tableId: string) {
        var data = await (await axios.get(`/api/table/fetch/id/${tableId}`)).data;
        console.log(data);

        return data;
    };

    public async getTableCards(tableId: string) {
        var deckId = await (await axios.get(`/api/table/fetch/id/${tableId}`)).data.deck[0].id;
        return await (await axios.post(`/api/table/fetch/cards/${deckId}`, {
            isPlayed: true
        })).data;
    }
}

export default new dataGatherer()