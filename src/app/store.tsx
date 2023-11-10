import { create } from "zustand";

type ScoreType = {
  score: number;
  updateScore: (clickedScore: number) => void;
};

const useStore = create<ScoreType>((set) => ({
  score: 0,
  updateScore: (clickedScore) => {
    set((state) => {
      const newScore = state.score + clickedScore;
      console.log(`Clicked Score: ${clickedScore}, New Score: ${newScore}`);
      return { score: newScore };
    });
  },
}));

export default useStore;
