import React, { Component } from 'react';
import PlayerBox from './playercard';
import Score from './score';

// shuffle from SO archives
const shuffle = array => (
    array
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
);

const playerList = [
    { image: 'assets/cards/aaron.png', picked: false },
    { image: 'assets/cards/spahn.png', picked: false },
    { image: 'assets/cards/banks.png', picked: false },
    { image: 'assets/cards/robinson.png', picked: false },
    { image: 'assets/cards/boyer.png', picked: false },
    { image: 'assets/cards/clemente.png', picked: false },
    { image: 'assets/cards/lopez.png', picked: false },
    { image: 'assets/cards/gomez.png', picked: false },
    { image: 'assets/cards/brewer.png', picked: false },
    { image: 'assets/cards/diering.png', picked: false },
    { image: 'assets/cards/donovan.png', picked: false },
    { image: 'assets/cards/face.png', picked: false },
    { image: 'assets/cards/finigan.png', picked: false },
    { image: 'assets/cards/turley.png', picked: false },
    { image: 'assets/cards/hatton.png', picked: false }
]

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                score: 0
            },
            players: shuffle(playerList)
        };
    }

    onPlayerClick = (index) => {
        if (!this.state.players[index].clicked) {
            this.setState({
                players: shuffle(this.state.players.map((player, current) => {
                    return (current === index) ? { ...player, clicked: true } : player
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
        } else {
            this.setState({
                players: shuffle(this.state.players.map(player => { return { ...player, clicked: false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
        }
    }

    render() {
        return (
            <div className="Field">
                <div class="header">
                    <h2>Baseball Legends Memory Game!</h2>
                    <h4>Click on each baseball legend's card only once! After you pick the cards will be reshuffled.<br />Can you pick all 15 without duplicates? Your score is consecutive picks without selecting the same card twice.</h4>
                    <Score
                        score={this.state.user.score} />
                </div>
                <PlayerBox
                    players={this.state.players}
                    onPlayerClick={this.onPlayerClick} />
            </div>
        )
    }
}