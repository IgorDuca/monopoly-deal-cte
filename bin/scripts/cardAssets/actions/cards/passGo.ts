import drawCards from '../../../cards/drawCards';

export default async function passGo(tableId: string, playerId: string) {
    return await drawCards.draw(tableId, playerId, 2);
}