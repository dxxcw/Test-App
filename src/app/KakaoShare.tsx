import { useEffect } from "react";

export const KakaoShare = () => {
  useEffect(() => {
    // Kakao 스크립트 동적으로 추가
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js";
    script.integrity =
      "sha384-kYPsUbBPlktXsY6/oNHSUDZoTX6+YI51f63jCPEIPFP09ttByAdxd2mEjKuhdqn4";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init("25e535afe51ca02bd5e6ea2ace81f926"); // 사용하려는 앱의 JavaScript 키 입력
        }

        kakao.Share.createCustomButton({
          container: "#kakaotalk-sharing-btn",
          templateId: 100577, // 카카오 디벨로퍼스에서 생성한 템플릿 ID 입력
          templateArgs: {
            title: "${userId}",
          },
        });
      }
    };
  }, []);

  return (
    <div className="mainContainer">
      <a id="kakaotalk-sharing-btn" href="javascript:;">
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
          alt="카카오톡 공유 보내기 버튼"
        />
      </a>
    </div>
  );
};
