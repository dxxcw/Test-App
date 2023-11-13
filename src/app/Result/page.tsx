/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import useStore from "../store";
import "./page.scss";

export default function Result() {
  const { score } = useStore();
  const [result, setResult] = useState([
    {
      title: "이직을 추천합니다.",
      contents:
        "만약 하는 일이 즐겁지 않고 의미를 찾기가 어렵다면\n지금 있는 곳을 떠나야 한다는 뜻입니다. ",
    },
    {
      title: "아직은 이직할 때가 아닙니다.",
      contents:
        "지금 있는 곳에 머무르면서\n스스로의 강점과 열정, 우선순위에 대해 더 알아보세요.\n성급한 이직은 아무런 문제도 해결해주지 않습니다.",
    },
    {
      title: "지금 일이 적성입니다.",
      contents:
        "지금 완벽하게 맞는 일을 하고 있으시네요.\n성장과 행복을 추구할 수 있는 환경에 있습니다. ",
    },
  ]);

  const handleResult = () => {
    if (score < 11) {
      return result[0];
    } else if (score > 10 && score < 21) {
      return result[1];
    } else if (score > 20) {
      return result[2];
    }
    return { title: "", contents: "" };
  };

  return (
    <div className="resultContainer">
      <div className="resultWrapper">
        <div className="mainTitle">
          <p>{handleResult().title}</p>
        </div>

        <img
          className="resultImg"
          src={`/images/result${result.indexOf(handleResult())}.png`}
          alt="logo image"
        />

        <p className="subTitle">{handleResult().contents}</p>

        <div className="subBgd">
          <div className="shareWrapper">
            <p className="btnText">친구에게 결과 공유하기</p>
            <div className="shareBox">
              <div className="kakao">카카오</div>
              <div className="gmail">Gmail</div>
              <div className="tryAgain">Test</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
