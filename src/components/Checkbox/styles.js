import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-right: 0.4rem;
  }

  .checkbox {
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.secondary};
    }
    &:has(input:checked) {
      border: 1px solid ${({ theme }) => theme.colors.secondary};
    }

    &:has(input:focus) {
      outline: 1px solid ${({ theme }) => theme.colors.secondary};
    }
    input {
      all: unset;
      position: absolute;
      inset: 0;
      cursor: pointer;
    }
  }
`;
