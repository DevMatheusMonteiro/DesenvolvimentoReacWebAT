import { Container } from "./styles";
import { PageContainer } from "../../components/PageContainer";
import { notify } from "../../services/toastService";
import { Checkbox } from "../../components/Checkbox";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function AdminPage() {
  const { isAdminOn } = useParams();
  const [isAdmin, setIsAdmin] = useState(isAdminOn == "admin-on");

  function toggleAdmin() {
    setIsAdmin(!isAdmin);
    notify.info(
      !isAdmin
        ? "O usuário atual é um administrador"
        : "O usuário atual é um colaborador"
    );
  }

  useEffect(() => {
    notify.info(
      isAdmin
        ? "O usuário atual é um administrador"
        : "O usuário atual é um colaborador"
    );
  }, []);
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
