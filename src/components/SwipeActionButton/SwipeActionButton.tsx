import React from "react";
import './SwipeActionButton.style.scss'

interface SwipeActionButtonProps {
  children: string;
  title?:string;
  backGround?:string;
  className?:string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SwipeActionButton: React.FunctionComponent<SwipeActionButtonProps> = (
  props
) => {
    const { children, backGround, className, onClick, title } = props;
  return (
    <button className="opal_btn" title={title} onClick={onClick}>
      <span>{children}</span>
      <div className={`btn_background ${className}`} style={{background: backGround}}></div>
    </button>
  );
};

export default SwipeActionButton;
