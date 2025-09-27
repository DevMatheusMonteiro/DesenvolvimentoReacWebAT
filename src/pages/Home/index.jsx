import { Container } from "./styles";
import { PageContainer } from "../../components/PageContainer";
import { Link } from "react-router-dom";

export default function Home() {
  const params = new URLSearchParams({
    name: "Matheus Monteiro",
    email: "matheus@email.com",
    telephone: "999999999",
  });
  return (
    <PageContainer>
      <Container className="wrapper">
        <nav>
          <ul>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
            <li>
              <Link to="/inline-event">Inline Event</Link>
            </li>
            <li>
              <Link to="/handle-event">Handle Event</Link>
            </li>
            <li>
              <Link to="/handle-event-x-inline-event">
                Handle Event X Inline Event
              </Link>
            </li>
            <li>
              <Link to={`/admin-page/admin-on`}>Admin</Link>
            </li>
            <li>
              <Link to={`/admin-page/admin-off`}>Colaborador</Link>
            </li>
            <li>
              <Link to={`/select-countries/Brazil`}>Países</Link>
            </li>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
            <li>
              <Link to="/select-food">Select Food</Link>
            </li>
            <li>
              <Link to={`/simple-form?${params.toString()}`}>
                Formulário Simples
              </Link>
            </li>
            <li>
              <Link to={`/simple-form-validation?${params.toString()}`}>
                Formulário Simples Com Validação
              </Link>
            </li>
            <li>
              <Link to={`/hook-form?${params.toString()}`}>Hook Form</Link>
            </li>
            <li>
              <Link to={`/hook-form-validation?${params.toString()}`}>
                Hook Form Validação
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </PageContainer>
  );
}
