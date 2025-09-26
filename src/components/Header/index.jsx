import { useLayout } from "../../contexts/LayoutContext";
import { IconButton } from "../IconButton";
import { Container } from "./styles";
import { FaSun, FaMoon } from "react-icons/fa6";

export default function Header() {
  const { toggleTheme, theme } = useLayout();
  return (
    <Container>
      <div className="wrapper">
        <h1>Assessment</h1>

        <IconButton
          title={
            theme.title == "light"
              ? "Trocar para tema o escuro"
              : "Trocar para tema o claro"
          }
          onClick={toggleTheme}
          icon={theme.title == "light" ? FaMoon : FaSun}
        />
      </div>
    </Container>
  );
}
