import React from "react";
import { ReactNode } from "react";
import "./DeckModal.style.scss";
interface DeckModalProps {
  children?: ReactNode;
}
const DeckModal: React.FunctionComponent<DeckModalProps> = (props) => {
  const { children } = props;
  return (
    <div className="modal_backdrop">
      <div className="modal_modal">
        <div className="modal_title">
          <h3>Title....</h3>
          <div className="modal-top_actions">
            <button>
              <div className="modal_circle">
                <span>X</span>
              </div>
            </button>
          </div>
        </div>
        <div className="modal_body">{children}</div>
        <div className="modal_actions">
          <button className="opal_btn ">
            <span>Study</span>
            <div className="btn_background green_light"></div>
          </button>
          <button className="opal_btn">
            <span>Deactivate</span>
            <div className="btn_background yellow_orange"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeckModal;
