"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";

interface CommonQuestionProps {
  questionNumber: number;
}

export default function CommonQuestion({
  questionNumber,
}: CommonQuestionProps) {
  const [topics, setTopics] = useState<
    { id: number; text: string; score: number }[]
  >([]);

  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:9999/Question${questionNumber}`
        );
        const data = await res.json();
        setTopics(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [questionNumber]);

  const scoreUpdate = (newScore: number) => {
    setTotalScore((prevTotalScore) => prevTotalScore + newScore);
  };

  console.log(totalScore);

  return (
    <div>
      <p>Q.{questionNumber}</p>

      {topics.map((t) => {
        return (
          <div key={t.id} className="Abox">
            <Link
              href={`/Question${Number(questionNumber) + 1}`}
              onClick={() => {
                scoreUpdate(t.score);
              }}
            >
              {t.text}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
