import { Container } from "./styles";
import { PageContainer } from "../../components/PageContainer";
import { notify } from "../../services/toastService";
import { Button } from "../../components/Button";

export default function InlineEvent() {
  return (
    <PageContainer>
      <Container className="wrapper">
        <Button
          description="Clique aqui"
          title="Clique"
          onClick={() => notify.info("Inline Event")}
        />
      </Container>
    </PageContainer>
  );
}
