import { Container } from "./styles";
import { PageContainer } from "../../components/PageContainer";
import { notify } from "../../services/toastService";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export default function InlineEvent() {
  return (
    <PageContainer>
      <Container className="wrapper">
        <Link to="/" className="home-link">
          Home
        </Link>
        <h2 className="title">Inline Event</h2>
        <Button
          description="Clique aqui"
          title="Clique"
          onClick={() => notify.info("Inline Event")}
        />
      </Container>
    </PageContainer>
  );
}
