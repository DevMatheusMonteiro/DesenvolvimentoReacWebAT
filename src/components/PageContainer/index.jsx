import { Container } from "./styles";

import { Header } from "../Header";
import { Footer } from "../Footer";

export function PageContainer({ children }) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
