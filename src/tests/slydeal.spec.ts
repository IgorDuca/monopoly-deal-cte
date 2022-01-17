import { cardFromPlayer } from '../lib/test_types/CFPType';

function tradeCards(playerId: string, homeCardId: string, targetCardId: string) {
    var cards: cardFromPlayer[] = [
        {
            id: "akdjwkjdaisdwjad",
            color: "red",
            pic_url: "dlaksdwkjaksjdw",
            type: "property",
            value: 3,
            playerId: "dakjdkjwkajsdw"
        },
        {
            id: "e1okejpskldmadnwih",
            color: "none",
            pic_url: "dlwkaoksdwm",
            type: "property",
            value: 3,
            playerId: "asdijwaisjidw"
        }
    ];

    for(var card of cards) {
        if(card.id !== targetCardId) continue;
        else {
            var target_player_id = card.playerId;
            for(var i = 0; i < cards.length; i++) {
                if(cards[i].id === homeCardId) {
                    card.playerId = playerId;
                    cards[i].playerId = target_player_id;
                };
            };
        };
    };

    return cards;
}

test("let's trade please", () => {
    expect(tradeCards("dakjdkjwkajsdw", "akdjwkjdaisdwjad", "e1okejpskldmadnwih")).toEqual([
        {
            id: "akdjwkjdaisdwjad",
            color: "red",
            pic_url: "dlaksdwkjaksjdw",
            type: "property",
            value: 3,
            playerId: "asdijwaisjidw"
        },
        {
            id: "e1okejpskldmadnwih",
            color: "none",
            pic_url: "dlwkaoksdwm",
            type: "property",
            value: 3,
            playerId: "dakjdkjwkajsdw"
        }
    ]);
});