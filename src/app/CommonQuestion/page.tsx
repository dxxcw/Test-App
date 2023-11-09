"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./page.scss";

export default function CommonQuestion() {
  const router = useRouter();

  const [topics, setTopics] = useState<
    { id: number; text: string; score: number }[]
  >([]);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState<{ id: number; title: string }[]>([]);
  const [score, setScroe] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:9999/Question${page}`);
        const data = await res.json();
        setTopics(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:9999/titles`);
        const data = await res.json();
        setTitle(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  const updateQuestion = (clickedItem) => {
    const clickedScore = clickedItem.score;
    setScroe((prevScore) => prevScore + clickedScore);

    if (page <= 9) {
      setPage((prevPage) => prevPage + 1);
    } else {
      router.push("/Result");
    }
  };

  return (
    <div className="qContainer">
      <p className="qNum">Q.{page}</p>

      <p className="qTitle">{title[`${page - 1}`]?.title}</p>

      {topics.map((t) => {
        return (
          <div key={t.id} className="aBox" onClick={() => updateQuestion(t)}>
            {t.text}
          </div>
        );
      })}
    </div>
  );
}
