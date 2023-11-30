import { useEffect } from "react";
import useStore from "./store";

export const KakaoShare = () => {
  const { score } = useStore();

  useEffect(() => {
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
          kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
        }

        if (score < 11) {
          kakao.Share.createCustomButton({
            container: "#kakaotalk-sharing-btn",
            templateId: 100894,
            templateArgs: {
              title: "테스트 결과입니다!",
              desc: "지금 하는 일이 얼마나 잘 맞는지 알아보세요.",
            },
          });
        } else if (score > 10 && score < 21) {
          kakao.Share.createCustomButton({
            container: "#kakaotalk-sharing-btn",
            templateId: 100893,
            templateArgs: {
              title: "테스트 결과입니다!",
              desc: "지금 하는 일이 얼마나 잘 맞는지 알아보세요.",
            },
          });
        } else {
          kakao.Share.createCustomButton({
            container: "#kakaotalk-sharing-btn",
            templateId: 100577,
            templateArgs: {
              title: "테스트 결과입니다!",
              desc: "지금 하는 일이 얼마나 잘 맞는지 알아보세요.",
            },
          });
        }
      }
    };
  }, []);

  return (
    <div className="mainContainer">
      <a id="kakaotalk-sharing-btn" href="#">
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
          alt="카카오톡 공유 보내기 버튼"
        />
      </a>
    </div>
  );
};
