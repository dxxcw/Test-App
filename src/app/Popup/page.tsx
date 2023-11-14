import React from "react";
import "./page.scss";

export default function Popup() {
  return (
    <div className="PopupWrapper">
      <div className="big">
        <img className="checkImg" src="/images/check.png" alt="check" />
        <p className="bigText">클립보드에 복사했습니다.</p>
      </div>

      <p className="small">결과를 전달해보세요!</p>
    </div>
  );
}
