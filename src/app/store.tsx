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

  // resultNumber: () => {
  //   return (state) => {
  //     if (state.score < 11) {
  //       return 0;
  //     } else if (state.score > 10 && state.score < 21) {
  //       return 1;
  //     } else {
  //       return 2;
  //     }
  //   };
  // },
}));
export default useStore;
