import { useRouter } from "next/router";
import CommonQuestion from "../../CommonQuestion/page";
import "./page.scss";

export default async function Question() {
  const router = useRouter();
  const questionNumber = Number(router.query.questionNumber);
  return <CommonQuestion questionNumber={questionNumber} />;
}
