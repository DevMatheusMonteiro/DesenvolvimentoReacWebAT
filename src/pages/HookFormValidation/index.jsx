import { Container } from "./styles";
import { useState } from "react";
import { RegisterForm } from "../../components/RegisterForm";
import { PageContainer } from "../../components/PageContainer";
import { notify } from "../../services/toastService";
import { useForm } from "react-hook-form";

export default function HookFormValidation() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", telephone: "" },
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

        {user && (
          <div className="result">
            <h3>Usuário</h3>
            <p>{JSON.stringify(user)}</p>
          </div>
        )}
      </Container>
    </PageContainer>
  );
}
