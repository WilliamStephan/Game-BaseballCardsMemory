import React from 'react';

import Player from './player';

const PlayerCard = (props) => {
    return (
        <div className="player-cards">
            {props.players.map((player, index) => <Player player={player} index={index} onPlayerClick={props.onPlayerClick} key={player.image} />)}
        </div>
    )
};

export default PlayerCard;