import React from "react";
import handleDotText from "../../utils/TextMutator";
import "./Deck.style.scss";

interface IDeckProps {
  title: string;
}

const Deck: React.FunctionComponent<IDeckProps> = (props) => {
  const { title } = props;
  return (
    <div className="deck_container">
      <div className="deck_deco"></div>
      <div className="deck_deco"></div>
      <div className="deck_deco">
        <div className="deco-line"></div>
        <div className="deco-line"></div>
        <div className="deco-line"></div>
        <div className="deco-line"></div>
        <div className="deco-line"></div>
        <div className="deco-line"></div>
      </div>
      <div className="deck_title">
        <h3 data-testid="label">{handleDotText(title, 15)}</h3>
      </div>
    </div>
  );
};

export default Deck;
