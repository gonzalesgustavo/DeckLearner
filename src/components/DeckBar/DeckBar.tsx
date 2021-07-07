import React from 'react'
import Deck from '../Deck/Deck'
import './DeckBar.style.scss'
const DeckBar: React.FunctionComponent = () => {
    return (
    <div className="DeckBar_container">
        <h4>Current Decks</h4>
        <div className="DeckBar_body">
            <Deck title="German" />
        </div>
    </div>
    );
}

export default DeckBar;