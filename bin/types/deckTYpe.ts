import { cardInterface } from "./cardType";

export type DeckInterface = {
    property: cardInterface[],
    wild: cardInterface[],
    action: cardInterface[],
    rent: cardInterface[],
    money: cardInterface[]
}