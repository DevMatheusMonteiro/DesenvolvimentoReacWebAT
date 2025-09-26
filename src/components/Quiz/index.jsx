import { Container } from "./styles";
import { useState } from "react";
import { Button } from "../Button";

export function Quiz({ question, result }) {
  const [appear, setAppear] = useState(false);
  return (
    <Container>
      <p className="question">{question}</p>
      {appear && <p className="result">{result}</p>}
      <Button
        onClick={() => setAppear(!appear)}
        description={appear ? "Esconder" : "Mostrar"}
        title={appear ? "Clique para esconder" : "Clique para mostrar"}
      />
    </Container>
  );
}
