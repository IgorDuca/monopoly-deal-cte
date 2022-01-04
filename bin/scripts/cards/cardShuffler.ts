import * as fs from 'fs';

import { cardInterface } from '../../types/cardType';
import { actionCardInterface } from '../../types/actionCardType';
import { moneyCardInterface } from '../../types/moneyCardType';

class cardShuffler {
    public shuffleProperties(): cardInterface[] {
        var cards: cardInterface[] = [];

        shuffle("brown",  2, "property").forEach(card => { cards.push(card) });
        shuffle("cyan",   3, "property").forEach(card => { cards.push(card) });
        shuffle("pink",   3, "property").forEach(card => { cards.push(card) });
        shuffle("orange", 3, "property").forEach(card => { cards.push(card) });
        shuffle("red",    3, "property").forEach(card => { cards.push(card) });
        shuffle("yellow", 3, "property").forEach(card => { cards.push(card) });
        shuffle("green",  3, "property").forEach(card => { cards.push(card) });
        shuffle("blue",   2, "property").forEach(card => { cards.push(card) });
        shuffle("black",  4, "property").forEach(card => { cards.push(card) });
        shuffle("teal",   2, "property").forEach(card => { cards.push(card) });

        return cards;
    }

    public shuffleWilds(): cardInterface[] {
        var cards: cardInterface[] = []; 

        shuffle("brown_cyan",  1, "wild").forEach(card => { cards.push(card) });
        shuffle("cyan_black",  1, "wild").forEach(card => { cards.push(card) });
        shuffle("pink_orange", 2, "wild").forEach(card => { cards.push(card) });
        shuffle("red_yellow",  2, "wild").forEach(card => { cards.push(card) });
        shuffle("green_blue",  1, "wild").forEach(card => { cards.push(card) });
        shuffle("green_black", 1, "wild").forEach(card => { cards.push(card) });
        shuffle("black_teal",  1, "wild").forEach(card => { cards.push(card) });
        shuffle("wild",  2, "wild").forEach(card => { cards.push(card) });

        return cards;
    };

    public shuffleActions(): actionCardInterface[] {
        var cards: actionCardInterface[] = []; 

        shuffle_action("property", "deal_breaker", 2).forEach(card => { cards.push(card) });
        shuffle_action("property", "forced_deal", 3).forEach(card => { cards.push(card) });
        shuffle_action("property", "sly_deal", 3).forEach(card => { cards.push(card) });
        shuffle_action("no", "just_say_no", 3).forEach(card => { cards.push(card) });
        shuffle_action("money", "debt_collector", 3).forEach(card => { cards.push(card) });
        shuffle_action("money", "birthday", 3).forEach(card => { cards.push(card) });
        shuffle_action("rent", "double_the_rent", 2).forEach(card => { cards.push(card) });
        shuffle_action("rent", "house", 3).forEach(card => { cards.push(card) });
        shuffle_action("rent", "hotel", 2).forEach(card => { cards.push(card) });
        shuffle_action("go", "pass_go", 10).forEach(card => { cards.push(card) });

        return cards;
    };

    public shuffleRent(): cardInterface[] {
        var cards: cardInterface[] = []; 

        shuffle("brown_cyan",  2, "rent")  .forEach(card => { cards.push(card) });
        shuffle("pink_orange", 2, "rent")  .forEach(card => { cards.push(card) });
        shuffle("red_yellow",  2, "rent")  .forEach(card => { cards.push(card) });
        shuffle("green_blue",  2, "rent") .forEach(card => { cards.push(card) });
        shuffle("black_teal",  2, "rent")  .forEach(card => { cards.push(card) });
        shuffle("all",         3, "rent")  .forEach(card => { cards.push(card) });

        return cards;
    };

    public shuffleMoney(): moneyCardInterface[] {
        var cards: moneyCardInterface[] = [];

        shuffle_money(6, 1).forEach(card => { cards.push(card) });
        shuffle_money(5, 2).forEach(card => { cards.push(card) });
        shuffle_money(3, 3).forEach(card => { cards.push(card) });
        shuffle_money(3, 4).forEach(card => { cards.push(card) });
        shuffle_money(2, 5).forEach(card => { cards.push(card) });
        shuffle_money(1, 10).forEach(card => { cards.push(card) });

        return cards;
    }
}

function shuffle(color: string, amount: number, type: string): cardInterface[] {
    var cards: cardInterface[] = [];
    
    if(type === "property") {
        var dir_cards = fs.readdirSync(`assets/${type}/${color}`);
    
        for(var i = 0; i < amount; i++) {
            cards.push({
                color: color,
                pic_url: dir_cards[i],
                type: type
            })
        };
    } else if (type === "wild") {
        for(var i = 0; i < amount; i++) {
            cards.push({
                color: color,
                pic_url: `assets/property/${type}/property_${color}.jpg`,
                type: type
            })
        };
    } else if (type === "rent") {
        for(var i = 0; i < amount; i++) {
            cards.push({
                color: color,
                pic_url: `assets/action/rent/rent_${color}.jpg`,
                type: type
            })
        };
    }

    return cards;
};

function shuffle_action(type: string, name: string, amount: number): actionCardInterface[] {
    var cards: actionCardInterface[] = [];

    for(var i = 0; i < amount; i++) {
        cards.push({
            pic_url: `assets/action/${type}/${name}.jpg`,
            type: type,
            name: name
        })
    };

    return cards;
};

function shuffle_money(amount: number, value: number) {
    var cards: moneyCardInterface[] = [];

    for(var i = 0; i < amount; i++) {
        cards.push({
            pic_url: `assets/money/money_${value}.jpg`,
            value: value
        })
    };

    return cards;
}

export default new cardShuffler();