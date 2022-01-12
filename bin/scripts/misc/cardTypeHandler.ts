import actionHandler from "../cardAssets/actions/actionHandler";

export default async function cardTypeHandler(name: string, tableId: string, playerId: string) {
    if(name === "action-pass_go") actionHandler.passGo(tableId, playerId);
    else if(name === "action-birthday") actionHandler.birthday(playerId, tableId);
}