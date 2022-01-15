import { PlayerType } from '../types/playerType';
import dataGatherer from './dataGatherer';

export default async function playerInfo(table: any, playerId: string): Promise<PlayerType> {
    var playerInfo;

    for(var i = 0; i < table.players.length; i++) {
        if(table.players[i].id === playerId) playerInfo = table.players[i];
    };

    return {
        id: playerInfo.id,
        played: playerInfo.hadPlayed,
        cards: await dataGatherer.getPlayerCards(table.id, playerId),
        name: playerInfo.name
    }
}