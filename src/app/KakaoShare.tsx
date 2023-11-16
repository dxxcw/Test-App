export const KakaoShare = () => {
  window.Kakao.Share.createCustomButton({
    container: "#kakaotalk-sharing-btn",
    templateId: 100577,
    templateArgs: {
      title: "@@님의 테스트 결과입니다!",
      description: "지금 하는 일이 얼마나 잘 맞는지 알아보세요.",
    },
  });
};
