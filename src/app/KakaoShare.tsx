export const KakaoShare = (
  title: string | undefined,
  contents: string | undefined
) => {
  // 이미지 URL을 지정
  const imageUrl = `/images/result${(resultValue?.id ?? 0) - 1}.png`;

  // 카카오링크로 메시지 전송

  window.Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: title ?? "카카오링크 테스트",
      description: contents ?? "이미지를 카카오톡 메시지로 공유합니다.",
      imageUrl: imageUrl,
      link: {
        webUrl: window.location.href,
        mobileWebUrl: window.location.href,
      },
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          webUrl: window.location.href,
          mobileWebUrl: window.location.href,
        },
      },
    ],
  });
};
