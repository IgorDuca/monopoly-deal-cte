import actionHandler from "../cardAssets/actions/actionHandler";

export default async function cardTypeHandler(type: string, tableId: string, playerId: string) {
    if(type === "action-go") {
        actionHandler.passGo(tableId, playerId);
    }
}