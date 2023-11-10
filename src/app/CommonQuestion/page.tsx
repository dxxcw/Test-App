/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useStore from "../store";
import ProgressBar from "../ProgressBar/page";
import "./page.scss";

export default function CommonQuestion() {
  const { updateScore } = useStore();

  // console.log(updateScore);

  const router = useRouter();

  const [topics, setTopics] = useState<
    { id: number; text: string; score: number }[]
  >([]);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState<{ id: number; title: string }[]>([]);

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

  const updateQuestion = (clickedItem: {
    id: number;
    text: string;
    score: number;
  }) => {
    const clickedScore = clickedItem.score;
    updateScore(clickedScore);

    if (page <= 9) {
      setPage((prevPage) => prevPage + 1);
    } else {
      router.push("/Result");
    }
  };

  return (
    <div className="qContainer">
      {/* <p className="qNum">Q.{page}</p> */}
      <ProgressBar />
      <p className="qTitle">{title[`${page - 1}`]?.title}</p>

      <div className="qImageWrapper">
        <img className="qImg" src={`/images/Q${page}.png`} alt="logo image" />
      </div>

      <div className="boxWrapper">
        {topics.map((t) => {
          return (
            <div key={t.id} className="aBox" onClick={() => updateQuestion(t)}>
              {t.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
