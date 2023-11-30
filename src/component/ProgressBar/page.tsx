import React from "react";
import "./page.scss";

type ProgressBarProps = {
  currentPage: number;
  totalPages: number;
};

export default function ProgressBar({
  currentPage,
  totalPages,
}: ProgressBarProps) {
  const progressPercentage = (currentPage / totalPages) * 100;

  return (
    <div className="progressBarWrapper">
      <div className="progressBar">
        <div className="progress" style={{ width: `${progressPercentage}%` }} />
      </div>
    </div>
  );
}
