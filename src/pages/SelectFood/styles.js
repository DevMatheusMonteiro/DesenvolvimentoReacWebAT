import styled from "styled-components";

export const Container = styled.div`
  .select-component {
    max-width: 500px;
    margin-inline: auto;
  }

  .card-category {
    max-width: 500px;
    margin-top: 2.4rem;
    margin-inline: auto;
    background: ${({ theme }) => theme.colors.surface};
    padding: 1.6rem;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    flex-direction: column;
    h3 {
      text-align: center;
    }
    p {
      margin-top: 1.4rem;
      text-align: justify;
    }
    img {
      padding: 1rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 8px;
      width: 100%;
      max-width: 300px;
      margin-top: 1.4rem;
      align-self: center;
    }
  }
`;
