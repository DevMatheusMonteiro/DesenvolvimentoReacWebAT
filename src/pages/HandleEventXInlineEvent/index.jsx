import { Container } from "./styles";
import { Quiz } from "../../components/Quiz";
import { PageContainer } from "../../components/PageContainer";
export default function HandleEventXInlineEvent() {
  return (
    <PageContainer>
      <Container className="wrapper">
        <Quiz question="Quais são as desvantagens de implementar um inline event?">
          <p>
            Usar inline event deixa o código menos organizado, pois mistura a
            lógica com a marcação, dificulta a reutilização e manutenção,
            complica testes e pode afetar a performance em projetos maiores.
          </p>
        </Quiz>
      </Container>
    </PageContainer>
  );
}
