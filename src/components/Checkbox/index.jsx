import { Container } from "./styles";
import { FaCheck } from "react-icons/fa";

export function Checkbox({ label, onChange, id, checked = false }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <div className="checkbox">
        <input type="checkbox" id={id} onChange={onChange} checked={checked} />
        {checked && <FaCheck />}
      </div>
    </Container>
  );
}
