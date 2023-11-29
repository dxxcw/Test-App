/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import useStore from "@/app/store";
import Link from "next/link";
import Popup from "@/app/Popup/page";
import { KakaoShare } from "@/app/KakaoShare";
import "./page.scss";

interface ResultProps {
  params: {
    id: string;
  };
}

export default function Result({ params }: ResultProps) {
  const { handlePopup, setHandlePopup } = useStore();
  const id = params.id;
  const [resultValue, setResultValue] = useState<{
    id: number;
    title: string;
    contents: string;
    color: string;
  } | null>(null);

  const copyUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setHandlePopup(!handlePopup);
      })
      .catch((error) => {
        console.error("클립보드 복사 실패:", error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:9999/Result/${id}`);
        const data = await res.json();
        setResultValue(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div
      className="resultContainer"
      onClick={() => {
        setHandlePopup(false);
      }}
    >
      <div className="resultWrapper">
        <div className="mainTitle">
          <p style={{ color: resultValue?.color }}>{resultValue?.title}</p>
        </div>

        <img
          className="resultImg"
          src={`/images/result${(resultValue?.id ?? 0) - 1}.png`}
          alt="logo image"
        />

        <p className="subTitle">{resultValue?.contents}</p>

        <div className="shareWrapper">
          <div className="shareBox">
            {/* 카카오 공유 */}
            <div className="kakaoBtn">
              <KakaoShare />
            </div>

            {/* 링크 공유 */}
            <div className="URL" onClick={() => copyUrl()}>
              <img className="UrlImg" src="/images/link.png" alt="restart" />
              {handlePopup && <Popup />}
            </div>

            {/* 다시 하기 */}
            <Link className="restart" href={"/"}>
              <img
                className="restartImg"
                src="/images/restart.png"
                alt="restart"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
