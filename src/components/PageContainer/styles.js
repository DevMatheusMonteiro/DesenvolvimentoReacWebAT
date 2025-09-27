import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: max-content 1fr max-content;
  grid-template-columns: 1fr;
  height: 100vh;
  main {
    width: 100%;
    height: 100%;
    grid-area: main;
    overflow: auto;

    .wrapper {
      max-width: 1000px;
      margin-inline: auto;
      padding: 2rem 1.6rem;
    }
  }
`;
