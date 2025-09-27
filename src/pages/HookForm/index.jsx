import { Container } from "./styles";
import { useState } from "react";
import { RegisterForm } from "../../components/RegisterForm";
import { PageContainer } from "../../components/PageContainer";
import { notify } from "../../services/toastService";
import { useForm } from "react-hook-form";
import { UserJson } from "../../components/UserJson";
import { Link, useSearchParams } from "react-router-dom";

export default function HookForm() {
  const [params] = useSearchParams();
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      name: params.get("name"),
      email: params.get("email"),
      telephone: params.get("telephone"),
    },
  });
  const [user, setUser] = useState();
  const name = watch("name");
  const email = watch("email");
  const telephone = watch("telephone");

  function onSubmitValid() {
    setUser({ name, email, telephone });
    notify.success("Usuário registrado com sucesso!");
    reset();
  }

  return (
    <PageContainer>
      <Container className="wrapper">
        <Link to="/">Home</Link>
        <h2 className="title">Hook Form</h2>
        <RegisterForm
          onSubmit={handleSubmit(onSubmitValid)}
          propsName={register("name")}
          propsEmail={register("email")}
          propsTelephone={register("telephone")}
        />

        {user && <UserJson user={user} />}
      </Container>
    </PageContainer>
  );
}
