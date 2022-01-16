import * as fs from 'fs';

import { cardType } from '../lib/types/cardType'
import { actionCardType } from '../lib/types/actionCardType'
import { moneyCardType } from '../lib/types/moneyCardType'

class cardShuffler {
    public shuffleProperties(): cardType[] {
        var cards: cardType[] = [];

        shuffle("brown", 2, "property").forEach(card => { cards.push(card) });
        shuffle("cyan", 3, "property").forEach(card => { cards.push(card) });
        shuffle("pink", 3, "property").forEach(card => { cards.push(card) });
        shuffle("orange", 3, "property").forEach(card => { cards.push(card) });
        shuffle("red", 3, "property").forEach(card => { cards.push(card) });
        shuffle("yellow", 3, "property").forEach(card => { cards.push(card) });
        shuffle("green", 3, "property").forEach(card => { cards.push(card) });
        shuffle("blue", 2, "property").forEach(card => { cards.push(card) });
        shuffle("black", 4, "property").forEach(card => { cards.push(card) });
        shuffle("teal", 2, "property").forEach(card => { cards.push(card) });

        return cards;
    }

    public shuffleWilds(): cardType[] {
        var cards: cardType[] = [];

        shuffle("brown_cyan", 1, "wild").forEach(card => { cards.push(card) });
        shuffle("cyan_black", 1, "wild").forEach(card => { cards.push(card) });
        shuffle("pink_orange", 2, "wild").forEach(card => { cards.push(card) });
        shuffle("red_yellow", 2, "wild").forEach(card => { cards.push(card) });
        shuffle("green_blue", 1, "wild").forEach(card => { cards.push(card) });
        shuffle("green_black", 1, "wild").forEach(card => { cards.push(card) });
        shuffle("black_teal", 1, "wild").forEach(card => { cards.push(card) });
        shuffle("wild", 2, "wild").forEach(card => { cards.push(card) });

        return cards;
    };

    public shuffleActions(): actionCardType[] {
        var cards: actionCardType[] = [];

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

    public shuffleRent(): cardType[] {
        var cards: cardType[] = [];

        shuffle("brown_cyan", 2, "rent").forEach(card => { cards.push(card) });
        shuffle("pink_orange", 2, "rent").forEach(card => { cards.push(card) });
        shuffle("red_yellow", 2, "rent").forEach(card => { cards.push(card) });
        shuffle("green_blue", 2, "rent").forEach(card => { cards.push(card) });
        shuffle("black_teal", 2, "rent").forEach(card => { cards.push(card) });
        shuffle("all", 3, "rent").forEach(card => { cards.push(card) });

        return cards;
    };

    public shuffleMoney(): moneyCardType[] {
        var cards: moneyCardType[] = [];

        shuffle_money(6, 1).forEach(card => { cards.push(card) });
        shuffle_money(5, 2).forEach(card => { cards.push(card) });
        shuffle_money(3, 3).forEach(card => { cards.push(card) });
        shuffle_money(3, 4).forEach(card => { cards.push(card) });
        shuffle_money(2, 5).forEach(card => { cards.push(card) });
        shuffle_money(1, 10).forEach(card => { cards.push(card) });

        return cards;
    }
}

function shuffle(color: string, amount: number, type: string): cardType[] {
    var cards: cardType[] = [];

    if (type === "property") {
        var dir_cards = fs.readdirSync(`src/cardAssets/images/${type}/${color}/`);

        var value = 0;

        if (color === "black" || "orange" || "pink" || "teal") value = 2;
        if (color === "blue" || "green") value = 4;
        if (color === "brown" || "cyan") value = 1;
        if (color === "red" || "yellow") value = 3;

        for (var i = 0; i < amount; i++) {
            cards.push({
                color: color,
                pic_url: `/api/assets/images/cards/${type}-${color}-${dir_cards[i]}`,
                type: type,
                value: value
            })
        };
    } else if (type === "wild") {

        var value = 0;

        if (color === "brown_cyan") value = 1;
        if (color === "pink_orange" || "black_teal") value = 2;
        if (color === "cyan_black" || "green_blue") value = 4;
        if (color === "red_yellow") value = 3;
        if (color === "all") value = 0;

        for (var i = 0; i < amount; i++) {
            cards.push({
                color: color,
                pic_url: `/api/assets/images/cards/property-${type}-property_${color}.jpg`,
                type: type,
                value: value
            })
        };
    } else if (type === "rent") {
        for (var i = 0; i < amount; i++) {
            cards.push({
                color: color,
                pic_url: `/api/assets/images/cards/action-rent-rent_${color}.jpg`,
                type: type,
                value: 1
            })
        };
    }

    return cards;
};

function shuffle_action(type: string, name: string, amount: number): actionCardType[] {
    var cards: actionCardType[] = [];

    var value = 0;

    if (name === "go") value = 1;
    if (name === "birthday") value = 2;
    if (name === "debt_collector" || "forced_deal" || "sly_deal") value = 3;
    if (name === "just_say_no") value = 4;
    if (name === "deal_breaker") value = 5;

    for (var i = 0; i < amount; i++) {
        cards.push({
            pic_url: `/api/assets/action/${type}/${name}.jpg`,
            type: `action-${name}`,
            name: name,
            value: value
        });
    };

    return cards;
};

function shuffle_money(amount: number, value: number) {
    var cards: moneyCardType[] = [];

    for (var i = 0; i < amount; i++) {
        cards.push({
            pic_url: `/api/assets/money/money_${value}.jpg`,
            value: value,
            type: "money"
        })
    };

    return cards;
}

export default new cardShuffler();