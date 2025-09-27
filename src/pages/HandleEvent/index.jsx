import { Container } from "./styles";
import { PageContainer } from "../../components/PageContainer";
import { notify } from "../../services/toastService";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export default function HandleEvent() {
  function handle() {
    notify.info("Handle Event");
  }
  return (
    <PageContainer>
      <Container className="wrapper">
        <Link to="/" className="home-link">
          Home
        </Link>
        <h2 className="title">Handle Event</h2>
        <Button description="Clique aqui" title="Clique" onClick={handle} />
      </Container>
    </PageContainer>
  );
}
