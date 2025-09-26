import { Container } from "./styles";

export function Button({
  title,
  description,
  icon: Icon,
  onClick,
  disabled = false,
  ...rest
}) {
  return (
    <Container
      title={title}
      className="button-component"
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {Icon && <Icon />}
      <span>{description}</span>
    </Container>
  );
}
