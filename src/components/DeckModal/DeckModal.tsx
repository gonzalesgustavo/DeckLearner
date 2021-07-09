import React from "react";
import Modal from "../Modal/Model";
import SwipeActionButton from "../SwipeActionButton/SwipeActionButton";
import "./DeckModal.style.scss";
interface DeckModalProps {
  id?:string;
}
const DeckModal: React.FunctionComponent<DeckModalProps> = (props) => {
  const { id } = props;

  const actions = [
    <SwipeActionButton className="green_light">Study</SwipeActionButton>,
    <SwipeActionButton backGround="rgb(241, 156, 156)">
      Deactivate
    </SwipeActionButton>,
  ];

  return (
    <div className="DeckModal_container">
      <Modal actions={actions}><p>hello</p></Modal>
    </div>
  );
};

export default DeckModal;
