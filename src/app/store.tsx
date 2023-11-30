import { create } from "zustand";

type ScoreType = {
  score: number;
  updateScore: (clickedScore: number) => void;
  handlePopup: boolean;
  setHandlePopup: (state: boolean) => boolean;
};

const useStore = create<ScoreType>((set) => ({
  score: 0,
  updateScore: (clickedScore) => {
    set((state) => {
      const newScore = state.score + clickedScore;
      return { score: newScore };
    });
  },
  handlePopup: false,
  setHandlePopup: (state) => {
    set({ handlePopup: state });
    return state;
  },
}));
export default useStore;
