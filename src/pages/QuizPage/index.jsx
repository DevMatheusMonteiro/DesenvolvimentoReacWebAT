import { Container } from "./styles";
import { Quiz } from "../../components/Quiz";
import { PageContainer } from "../../components/PageContainer";
export default function QuizPage() {
  return (
    <PageContainer>
      <Container className="wrapper">
        <Quiz question="Olá, tudo bem?">
          <p>Sim</p>
        </Quiz>
      </Container>
    </PageContainer>
  );
}
