import Link from "next/link";

export function Buttons() {
  return (
    <div className="buttons">
      <Link href={`/Question1`}>
        <p className="btnText">테스트 시작하기</p>
      </Link>
    </div>
  );
}
