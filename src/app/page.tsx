import Link from "next/link";
import "./page.scss";

export default function Home() {
  return (
    <div className="container">
      <h2>지금 하는 일, 잘 맞을까?</h2>
      <p>지금 직업이 얼마나 잘 맞는지 알아보세요.</p>
      <div className="startWrapper">
        <Link href={`/Q1`}>
          <p className="startText">테스트 시작하기</p>
        </Link>
      </div>
    </div>
  );
}
