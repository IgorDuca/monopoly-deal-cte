import { playerType } from "../../../lib/types/playerType";
import Buffet from '../../../helpers/buffet'

export default function cardsBday(players: playerType[], mainPlayerId: string) {

    console.log(players, mainPlayerId);

    var playerPayouts = [];

    players.forEach(player => {
        if(player.id !== mainPlayerId) {
            var payout = Buffet.payout(player, 2);
            playerPayouts.push({ id: player.id, buffet_payout: payout });
        };
    });

    return playerPayouts;
}