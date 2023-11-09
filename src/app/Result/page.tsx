"use client";

import { useState } from "react";

import "./page.scss";

export default function Result() {
  const [score, setScore] = useState(25);
  const [result, setResult] = useState([
    {
      title: "이직을 추천합니다.",
      contents:
        "만약 하는 일이 즐겁지 않고 의미를 찾기가 어렵다면 지금 있는 곳을 떠나야 한다는 뜻입니다. ",
    },
    {
      title: "아직은 이직할 때가 아닙니다.",
      contents:
        "지금 있는 곳에 머무르면서 스스로의 강점과 열정, 우선순위에 대해 더 알아보세요. 성급한 이직은 아무런 문제도 해결해주지 않습니다.",
    },
    {
      title: "지금 일이 적성입니다.",
      contents:
        "지금 완벽하게 맞는 일을 하고 있으시네요. 성장과 행복을 추구할 수 있는 환경에 있습니다. ",
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
  };

  return (
    <div className="mainContainer">
      <div className="mainImg">
        {/* <Image className="mainImg" src={mainImg} alt="설명" width={300} /> */}
        <p className="mainTitle">{handleResult().title}</p>
        <div className="subBgd">
          <p className="subTitle">{handleResult().contents}</p>

          <div className="shareWrapper">
            <p className="btnText">친구에게 결과 공유하기</p>
          </div>
        </div>
      </div>
    </div>
  );
}
