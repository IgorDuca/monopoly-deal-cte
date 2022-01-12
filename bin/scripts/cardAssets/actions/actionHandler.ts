import passGo from './cards/passGo'
import birthday from './cards/birthday';

class actionHandler {
    public async passGo(tableId: string, playerId: string) { passGo(tableId, playerId) };
    public async birthday(playerId: string, tableId: string) { birthday(playerId, tableId) };
};

export default new actionHandler();