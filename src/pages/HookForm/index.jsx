import { Container } from "./styles";
import { useState } from "react";
import { RegisterForm } from "../../components/RegisterForm";
import { PageContainer } from "../../components/PageContainer";
import { notify } from "../../services/toastService";
import { useForm } from "react-hook-form";

export default function HookForm() {
  const { register, handleSubmit, reset, watch } = useForm({
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

  return (
    <PageContainer>
      <Container className="wrapper">
        <RegisterForm
          onSubmit={handleSubmit(onSubmitValid)}
          propsName={register("name")}
          propsEmail={register("email")}
          propsTelephone={register("telephone")}
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
