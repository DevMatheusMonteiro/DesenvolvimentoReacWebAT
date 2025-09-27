import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  gap: 1.6rem;
  width: 100%;
  max-width: 800px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 1rem 2rem;
  h2 {
    text-align: center;
  }
  .form-group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;
  }

  .button-component {
    max-width: 200px;
    margin: 0 auto;
  }

  .error {
    color: ${({ theme }) => theme.colors.tomato};
    font-size: 1.4rem;
    margin-top: 0.4rem;
  }
`;
