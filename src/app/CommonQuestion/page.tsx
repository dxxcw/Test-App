/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useStore from "../store";
import ProgressBar from "../ProgressBar/page";
import "./page.scss";

export default function CommonQuestion() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const { score, updateScore } = useStore();
  const router = useRouter();
  const [topics, setTopics] = useState<
    { id: number; text: string; score: number }[]
  >([]);
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

  const resultNumber = () => {
    if (score < 11) {
      return 1;
    } else if (score > 10 && score < 21) {
      return 2;
    } else {
      return 3;
    }
  };

  const updateQuestion = (clickedItem: {
    id: number;
    text: string;
    score: number;
  }) => {
    const clickedScore = clickedItem.score;
    updateScore(clickedScore);

    if (page < totalPage) {
      setPage((prevPage) => prevPage + 1);
    } else {
      goToResultPage();
    }
  };

  const goToResultPage = () => {
    router.push(`/Result/${resultNumber()}`);
  };

  return (
    <div className="qContainer">
      {/* <p className="qNum">Q.{page}</p> */}
      <ProgressBar currentPage={page} totalPages={totalPage} />
      <p className="qTitle">{title[`${page - 1}`]?.title}</p>

      <div className="qImageWrapper">
        <img className="qImg" src={`/images/Q${page}.png`} alt="logo image" />
      </div>

      <div className="boxWrapper">
        {topics.map((t) => {
          return (
            <div key={t.id} className="aBox" onClick={() => updateQuestion(t)}>
              <p>{t.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
