import { cardType } from "./cardType"

export type deckType = {
    id: string,
    tableId: string,
    cards?: cardType[],
}