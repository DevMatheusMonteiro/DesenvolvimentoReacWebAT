import { Container } from "./styles";
import { PageContainer } from "../../components/PageContainer";
import { notify } from "../../services/toastService";
import { Checkbox } from "../../components/Checkbox";
import { useState } from "react";
export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  function toggleAdmin() {
    setIsAdmin(!isAdmin);
    notify.info(
      !isAdmin
        ? "O usuário atual é um administrador"
        : "O usuário atual é um colaborador"
    );
  }
  return (
    <PageContainer>
      <Container className="wrapper">
        <Checkbox
          id="admin"
          onChange={toggleAdmin}
          label="Administrador"
          checked={isAdmin}
        />
      </Container>
    </PageContainer>
  );
}
