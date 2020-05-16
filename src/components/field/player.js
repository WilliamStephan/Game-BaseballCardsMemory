import React, { Component } from 'react';
export default class Player extends Component {

    handleClick = () => {
        this.props.onPlayerClick(this.props.index);
    }

    render() {
        return (
            <div className="player-card">
                <img
                    src={this.props.player.image}
                    alt="player-card"
                    className="card-image"
                    onClick={this.handleClick} />
            </div>
        )
    }
}