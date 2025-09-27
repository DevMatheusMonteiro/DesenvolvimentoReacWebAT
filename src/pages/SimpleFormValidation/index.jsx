import { Container } from "./styles";
import { useState } from "react";
import { RegisterForm } from "../../components/RegisterForm";
import { PageContainer } from "../../components/PageContainer";
import { notify } from "../../services/toastService";
import { Link, useSearchParams } from "react-router-dom";
import { UserJson } from "../../components/UserJson";

export default function SimpleFormValidation() {
  const [params] = useSearchParams();
  const [user, setUser] = useState();
  const [name, setName] = useState(params.get("name"));
  const [email, setEmail] = useState(params.get("email"));
  const [telephone, setTelephone] = useState(params.get("telephone"));
  const [errors, setErrors] = useState({});
  function onSubmit(e) {
    e.preventDefault();
    let message = "";
    setUser(null);
    setErrors({});
    if (name.trim() === "") {
      message = "Nome é obrigatório";
      notify.error(message);
      return setErrors({ name: { message } });
    }
    if (email.trim() === "") {
      message = "Email é obrigatório";
      notify.error(message);
      return setErrors({ email: { message } });
    }
    if (telephone && !/^[0-9]+$/.test(telephone)) {
      message = "Digite apenas números no campo telefone";
      notify.error(message);
      return setErrors({ telephone: { message } });
    }
    notify.success("Usuário registrado com sucesso!");
    setUser({ name, email, telephone });
  }

  return (
    <PageContainer>
      <Container className="wrapper">
        <Link to="/">Home</Link>
        <h2 className="title">Formulário Simples Com Validação</h2>
        <RegisterForm
          errors={errors}
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
