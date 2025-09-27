import { Container } from "./styles";

export function UserJson({ user }) {
  return (
    <Container>
      <h3>Usuário</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Container>
  );
}
