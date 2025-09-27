import { Container } from "./styles";
import { useState } from "react";
import { Button } from "../Button";

export function Quiz({ question, children }) {
  const [appear, setAppear] = useState(false);
  return (
    <Container>
      <p className="question">{question}</p>
      {appear && <div className="result">{children}</div>}
      <Button
        onClick={() => setAppear(!appear)}
        description={appear ? "Esconder" : "Mostrar"}
        title={appear ? "Clique para esconder" : "Clique para mostrar"}
      />
    </Container>
  );
}
