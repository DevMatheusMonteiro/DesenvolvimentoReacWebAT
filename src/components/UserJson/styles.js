import styled from "styled-components";

export const Container = styled.div`
  h3 {
    margin-bottom: 1.6rem;
    text-align: center;
  }

  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  max-width: max-content;
  margin-top: 2.4rem;
  margin-inline: auto;
  padding: 1rem;

  pre {
    background: ${({ theme }) => theme.colors.background};
    padding: 1rem;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
