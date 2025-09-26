import { Container } from "./styles";
import { Quiz } from "../../components/Quiz";
export default function QuizPage() {
  return (
    <Container>
      <div className="wrapper">
        <Quiz question="Olá, tudo bem" result="Sim" />
      </div>
    </Container>
  );
}
