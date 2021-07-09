import React from "react";
import { ReactNode } from "react";
import './Modal.style.scss';

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  actions?: React.ReactNodeArray; 
}

const Modal: React.FunctionComponent<ModalProps> = (props) => {
  const { children, actions, onClose } = props;
  return (
    <div className="modal_backdrop">
      <div className="modal_modal">
        <div className="modal_title">
          <h3>Title....</h3>
          <div className="modal-top_actions">
            <button title="close button" onClick={onClose}>
              <div className="modal_circle">
                <span>X</span>
              </div>
            </button>
          </div>
        </div>
        <div className="modal_body">{children}</div>
        <div className="modal_actions">
         {actions?.map((act:ReactNode, idx) => (<template key={idx}>{act}</template>))}
        </div>
      </div>
    </div>
  );
};

export default Modal;