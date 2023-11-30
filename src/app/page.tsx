/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */
import Link from "next/link";
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
