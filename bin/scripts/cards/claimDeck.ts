/* 
    Deck cards:
    28 properties: 2x brown, 3x cyan, 3x pink, 3x orange, 3x red, 3x yellow, 3x green, 2x blue, 4x black, 2x teal. 
    
    11x wild cards: 1x brown/cyan, 1x cyan/black, 2x orange,pink, 2x red/yellow, 1x blue/dark-green, 1x green/black, 1x black/teal, 2x wild.

    34x action cards: 2x deal breaker, 3x forced deal, 3x sly deal, 3x just say no, 3x debt collector, 3x birthday, 2x double the rent, 3x house, 2x hotel, 10x pass go.

    13x rent cards: 2x cyan/brown, 2x pink/orange, 2x red/yellow, 2x blue/dark-green, 2x black/teal, 3x rent all.

    20x money cards: 6x 1m, 5x 2m, 3x 3m, 3x 4m, 2x 5m, 1x 10m.
*/

import cardShuffler from "./cardShuffler";

class claimDeck {
    public shuffleDeck() {
        var property_cards = cardShuffler.shuffleProperties();
        var wild_cards = cardShuffler.shuffleWilds();
        var action_cards = cardShuffler.shuffleActions();
        var rent_cards = cardShuffler.shuffleRent();
        var money_cards = cardShuffler.shuffleMoney();

        return { property_cards, wild_cards, action_cards, rent_cards, money_cards }
    }
}

export default new claimDeck();
