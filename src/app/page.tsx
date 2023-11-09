import Link from "next/link";
import Image from "next/image";
import mainImg from "./mainImg.png";
import "./page.scss";

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="mainImg">
        {/* <Image className="mainImg" src={mainImg} alt="설명" width={300} /> */}
        <p className="mainTitle">지금 하는 일, 잘 맞을까?</p>
        <p className="subTitle">지금 직업이 얼마나 잘 맞는지 알아보세요.</p>
      </div>

      <div className="startBtn">
        <Link href={`/Test`}>
          <p className="btnText">테스트 시작하기</p>
        </Link>
      </div>
    </div>
  );
}
