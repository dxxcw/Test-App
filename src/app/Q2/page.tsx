import Link from "next/link";
import "./page.scss";

export default async function Q2() {
  const response = await fetch("http://localhost:9999/Q1");
  const topics = await response.json();
  return (
    <div>
      <p>Q.2</p>

      {topics.map((t: { id: number; text: string }) => {
        return (
          <div key={t.id} className="Abox">
            <Link href={`/Q2`}>{t.text}</Link>
          </div>
        );
      })}
    </div>
  );
}
