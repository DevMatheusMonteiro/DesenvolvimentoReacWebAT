import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  .register-form-component {
    margin-inline: auto;
  }
  .result {
    h3 {
      margin-bottom: 1.6rem;
    }

    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    text-align: center;
    max-width: 500px;
    margin-top: 2.4rem;
    margin-inline: auto;
    padding: 1rem;
  }
`;
