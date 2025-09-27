import styled from "styled-components";

export const Container = styled.div`
  nav {
    max-width: 600px;
    margin-inline: auto;
    ul {
      list-style: none;
      padding: 2rem;
      display: flex;

      flex-wrap: wrap;
      gap: 1.6rem;
      background: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 12px;

      li {
        background: ${({ theme }) => theme.colors.background};
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 8px;
        padding: 1.2rem;
        /* max-width: 150px; */
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
        transition: filter 0.3s ease-in-out;
        &:hover {
          filter: ${({ theme }) =>
            theme.title === "dark" ? "brightness(1.5)" : "brightness(1.1)"};
        }
      }
    }
  }
`;
