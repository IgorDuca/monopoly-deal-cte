import cardsBday from "../cardAssets/cardScripts/action/bday";
import { cardType } from "../lib/types/cardType";
import { playerType } from "../lib/types/playerType";

function runBdayCard() {
    var cards: cardType[] = [
        {
            pic_url: "dakjsdkajsd",
            type: "money",
            value: 1,
            id: "daskdkqj1-23",
            color: ""
        },
        {
            pic_url: "dakjsdkajsd",
            type: "money",
            value: 1,
            id: "daskdkqj1-43",
            color: ""
        },
        {
            pic_url: "dakjsdkajsd",
            type: "money",
            value: 1,
            id: "daskdkqj1-53",
            color: ""
        }
    ]

    var players: playerType[] = [
        {
            id: "aksjdw9139k1e",
            tableId: "sakdj290102-3j",
            name: "igo",
            cards: cards
        },
        {
            id: "dlwkoaksdkw",
            tableId: "sakdj290102-3j",
            name: "jesebel",
            cards: cards
        }
    ];

    return cardsBday(players, "aksjdw9139k1e");
};

test('bday-cake', () => {
    expect(runBdayCard()).toEqual([ { id: 'dlwkoaksdkw', buffet_payout: [ 1, 1 ] } ]);
})