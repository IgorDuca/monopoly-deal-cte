import cardShuffler from "../components/cardShuffler";

export default async function shuffleCards() {
    var action_cards = cardShuffler.shuffleActions();
    var property_cards = cardShuffler.shuffleProperties();
    var money_cards = cardShuffler.shuffleMoney();
    var rent_cards = cardShuffler.shuffleRent();
    var wild_cards = cardShuffler.shuffleWilds();

    var parsed_cards: any[] = [];
    [action_cards, property_cards, money_cards, rent_cards, wild_cards].map((card: any) => {
        card.forEach((sub_card: any) => {
            parsed_cards.push(sub_card)
        });
    });

    return parsed_cards;
}