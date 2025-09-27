import { Container } from "./styles";
import { Quiz } from "../../components/Quiz";
import { PageContainer } from "../../components/PageContainer";
import { Link } from "react-router-dom";
export default function QuizPage() {
  return (
    <PageContainer>
      <Container className="wrapper">
        <Link to="/" className="home-link">
          Home
        </Link>
        <h2 className="title">Quiz</h2>
        <Quiz question="Olá, tudo bem?">
          <p>Sim</p>
        </Quiz>
      </Container>
    </PageContainer>
  );
}
