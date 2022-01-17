import { cardFromPlayer } from '../lib/test_types/CFPType';

function forcedDeal(playerId: string, targetCardId: string) {
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

    cards.forEach(card => {
        if(card.id === targetCardId) {
            if(card.type !== "property") return false;

            card.playerId = playerId;
        };
    });

    return cards;
}

test("give me back my card", () => {
    expect(forcedDeal("dakjdkjwkajsdw", "e1okejpskldmadnwih")).toEqual([
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
            playerId: "dakjdkjwkajsdw"
        }
    ]);
});