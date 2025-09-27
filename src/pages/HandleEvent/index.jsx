import { Container } from "./styles";
import { PageContainer } from "../../components/PageContainer";
import { notify } from "../../services/toastService";
import { Button } from "../../components/Button";

export default function HandleEvent() {
  function handle() {
    notify.info("Handle Event");
  }
  return (
    <PageContainer>
      <Container className="wrapper">
        <Button description="Clique aqui" title="Clique" onClick={handle} />
      </Container>
    </PageContainer>
  );
}
