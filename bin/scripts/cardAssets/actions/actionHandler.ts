import passGo from './cards/passGo'

class actionHandler {
    public async passGo(tableId: string, playerId: string) { passGo(tableId, playerId) };
};

export default new actionHandler();