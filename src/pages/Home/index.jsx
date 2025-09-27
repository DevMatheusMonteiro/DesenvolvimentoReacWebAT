import { Container } from "./styles";
import { PageContainer } from "../../components/PageContainer";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
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
            <li onClick={() => navigate("/quiz")}>Quiz</li>
            <li onClick={() => navigate("/inline-event")}>Inline Event</li>
            <li onClick={() => navigate("/handle-event")}>Handle Event</li>
            <li onClick={() => navigate("/handle-event-x-inline-event")}>
              Handle Event X Inline Event
            </li>
            <li onClick={() => navigate("/admin-page/admin-on")}>Admin</li>
            <li onClick={() => navigate("/admin-page/admin-off")}>
              Colaborador
            </li>
            <li onClick={() => navigate("/select-countries/Brazil")}>Países</li>
            <li onClick={() => navigate("/products")}>Produtos</li>
            <li onClick={() => navigate("/select-food")}>Select Food</li>
            <li onClick={() => navigate(`/simple-form?${params.toString()}`)}>
              Formulário Simples
            </li>
            <li
              onClick={() =>
                navigate(`/simple-form-validation?${params.toString()}`)
              }
            >
              Formulário Simples Com Validação
            </li>
            <li onClick={() => navigate(`/hook-form?${params.toString()}`)}>
              Hook Form
            </li>
            <li
              onClick={() =>
                navigate(`/hook-form-validation?${params.toString()}`)
              }
            >
              Hook Form Validação
            </li>
          </ul>
        </nav>
      </Container>
    </PageContainer>
  );
}
