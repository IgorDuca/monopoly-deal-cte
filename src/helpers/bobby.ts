type card = {
    id: string,
    color: string
    pic_url: string,
    type: string,
    amount?: number,
    value: number,
    playerId: string
};

class Bobby {
    public async trade(cards: card[], playerId: string, homeCardId: string, targetCardId: string) {
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
    };
}