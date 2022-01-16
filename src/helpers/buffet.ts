import { playerType } from "src/lib/types/playerType";
import { cardType } from "src/lib/types/cardType";

class Buffet {
    public payout(player: playerType, cost: number,) {
        console.log(player, cost)

        var money_by_cards = countMoneyCards(player.cards, player);

        if(money_by_cards >= cost) {
            var money_cards = [];

            for(var i = 0; i < player.cards.length; i++) {
                money_cards.push(player.cards[i].value)
            };

            return searchPayout(money_cards);
        };
    };
};

function countMoneyCards(cards: cardType[], player: playerType) {
    var money_card_amount = 0;

    for(var i = 0; i < player.cards.length; i++) {
        var card = player.cards[i];

        if(card.type === "money") money_card_amount += card.value;
        else continue;
    };

    return money_card_amount;
};

function searchPayout(values: number[]) {
    var num_pairs = [];

    for(var i = 0; i < values.length; i++) {
        if(i == 0) num_pairs.push(values[i]);
        if(num_pairs[0] + values[i] >= 2) {
            if(num_pairs.length == 1) {
                num_pairs.push(values[i])
            } else if(num_pairs[1] > values[i]) {
                num_pairs[1] = values[i]
            };
        }; 
    };

    return num_pairs;
};

export default new Buffet();