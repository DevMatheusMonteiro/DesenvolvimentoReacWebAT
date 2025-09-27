import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  .question {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }
  .result {
    background: ${({ theme }) => theme.colors.background};
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    margin-top: 1rem;
  }

  .button-component {
    max-width: 200px;
    margin-top: 1rem;
    margin-inline: auto;
  }
`;
