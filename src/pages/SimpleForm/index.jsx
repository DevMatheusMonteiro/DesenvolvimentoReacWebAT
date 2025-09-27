import { Container } from "./styles";
import { useState } from "react";
import { RegisterForm } from "../../components/RegisterForm";
import { PageContainer } from "../../components/PageContainer";
import { Link, useSearchParams } from "react-router-dom";
import { UserJson } from "../../components/UserJson";

export default function SimpleForm() {
  const [params] = useSearchParams();
  const [user, setUser] = useState();
  const [name, setName] = useState(params.get("email"));
  const [email, setEmail] = useState(params.get("email"));
  const [telephone, setTelephone] = useState(params.get("telephone"));
  function onSubmit(e) {
    e.preventDefault();
    setUser({ name, email, telephone });
  }

  return (
    <PageContainer>
      <Container className="wrapper">
        <Link to="/" className="home-link">
          Home
        </Link>
        <h2 className="title">Formulário Simples</h2>
        <RegisterForm
          onSubmit={onSubmit}
          propsName={{
            value: name,
            onChange: (e) => setName(e.target.value),
          }}
          propsEmail={{
            value: email,
            onChange: (e) => setEmail(e.target.value),
          }}
          propsTelephone={{
            value: telephone,
            onChange: (e) => setTelephone(e.target.value),
          }}
        />

        {user && <UserJson user={user} />}
      </Container>
    </PageContainer>
  );
}
