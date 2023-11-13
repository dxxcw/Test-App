/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import "./page.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vocational Test</title>
        <meta
          name="description"
          content="지금 하는 일이 얼마나 잘 맞는지 알아보세요."
        />
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"
          integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH"
          crossOrigin="anonymous"
        ></script>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat+Alternates:ital@1&family=Nanum+Pen+Script&family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&family=Noto+Serif+KR:wght@200;400;500&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="mainContainer">
        <div className="mainWrapper">
          <p className="mainTitle">지금 하는 일, 잘 맞을까?</p>
          <p className="subTitle">지금 직업이 얼마나 잘 맞는지 알아보세요.</p>
          <div className="mainImg" />
        </div>

        <div className="startBtn">
          <Link href={`/Test`}>
            <p className="btnText">테스트 시작하기</p>
          </Link>
        </div>
      </div>
    </>
  );
}
