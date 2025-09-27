import { Container } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";

export function RegisterForm({
  propsName,
  propsEmail,
  propsTelephone,
  onSubmit,
  errors = {},
}) {
  return (
    <Container onSubmit={onSubmit} className="register-form-component">
      <h2>Cadastro</h2>
      <div className="form-group">
        <div>
          <Input label="Nome" id="name" {...propsName} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>
        <div>
          <Input label="Email" id="email" {...propsEmail} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div>
          <Input label="Telefone" id="telephone" {...propsTelephone} />
          {errors.telephone && (
            <p className="error">{errors.telephone.message}</p>
          )}
        </div>
      </div>
      <Button description="Cadastrar" title="Cadastre-se" />
    </Container>
  );
}
