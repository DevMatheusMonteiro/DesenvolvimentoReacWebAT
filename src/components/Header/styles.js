import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  background: ${({ theme }) => theme.colors.surface};

  .wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    padding: 1rem 1.6rem;
    margin-inline: auto;

    h1 {
      text-transform: uppercase;
    }

    .iconButton-component {
      svg {
        font-size: 3.2rem;
      }
    }
  }
`;
