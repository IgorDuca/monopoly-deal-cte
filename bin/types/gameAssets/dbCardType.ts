import { deckType } from "./deckType"

export type dbCardType = {
    deckId:   string,
    color?:   string,
    pic_url:  string,
    type:     string,
    value:    number
}