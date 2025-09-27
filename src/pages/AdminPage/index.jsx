import { Container } from "./styles";
import { PageContainer } from "../../components/PageContainer";
import { notify } from "../../services/toastService";
import { Checkbox } from "../../components/Checkbox";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function AdminPage() {
  const { isAdminOn } = useParams();
  const [isAdmin, setIsAdmin] = useState(isAdminOn == "admin-on");

  function toggleAdmin() {
    setIsAdmin(!isAdmin);
  }

  useEffect(() => {
    notify.info(
      isAdmin
        ? "O usuário atual é um administrador"
        : "O usuário atual é um colaborador"
    );
  }, [isAdmin]);
  return (
    <PageContainer>
      <Container className="wrapper">
        <Link to="/" className="home-link">
          Home
        </Link>
        <h2 className="title">{isAdmin ? "Administrador" : "Colaborador"}</h2>
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
