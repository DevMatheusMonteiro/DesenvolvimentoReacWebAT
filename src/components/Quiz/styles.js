import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  max-width: 600px;
  .question {
    font-size: 2rem;
    font-weight: bold;
  }
  .result {
    background: ${({ theme }) => theme.colors.background};
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    font-weight: 500;
    border-radius: 8px;
    margin-block: 1rem;
  }

  .button-component {
    max-width: 200px;
    margin-inline: auto;
  }
`;
