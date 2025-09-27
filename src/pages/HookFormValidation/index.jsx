import { Container } from "./styles";
import { useState } from "react";
import { RegisterForm } from "../../components/RegisterForm";
import { PageContainer } from "../../components/PageContainer";
import { notify } from "../../services/toastService";
import { useForm } from "react-hook-form";
import { UserJson } from "../../components/UserJson";
import { Link, useSearchParams } from "react-router-dom";

export default function HookFormValidation() {
  const [params] = useSearchParams();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
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

  function onSubmitInvalid() {
    setUser(null);
    if (errors.name) notify.error(errors.name.message);

    if (errors.email) notify.error(errors.email.message);

    if (errors.telephone) notify.error(errors.telephone.message);
  }

  return (
    <PageContainer>
      <Container className="wrapper">
        <Link to="/">Home</Link>
        <h2 className="title">Hook Form Com Validação</h2>
        <RegisterForm
          errors={errors}
          onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}
          propsName={register("name", { required: "Nome é obrigatório." })}
          propsEmail={register("email", { required: "Email é obrigatório." })}
          propsTelephone={register("telephone", {
            pattern: {
              value: /^[0-9]+$/,
              message: "Digite apenas números no campo telefone",
            },
          })}
        />

        {user && <UserJson user={user} />}
      </Container>
    </PageContainer>
  );
}
