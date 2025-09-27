import styled from "styled-components";
import Select from "react-select";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    &[data-sronly="true"] {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
      margin: 0;
    }
    margin-bottom: 0.4rem;
  }

  &:has(input:focus) {
    label {
      color: ${({ theme }) => theme.colors.secondary};
    }

    .select-wrapper {
      outline: 1px solid ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const StyledSelect = styled(Select)`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  height: 4rem;
  border-radius: 8px;

  .select__value-container {
    color: ${({ theme }) => theme.colors.primary};
  }
  .select__single-value {
    color: ${({ theme }) => theme.colors.text};
  }

  .select__placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  .select__control {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.primary};
    .select__input-container {
      font-size: clamp(1.4rem, 3vw, 1.6rem);
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .select__menu {
    background-color: ${({ theme }) => theme.colors.surface};
  }
  .select__option {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
  }

  .select__option--is-focused {
    background: ${({ theme }) => theme.colors.secondaryHover};
  }

  .select__option--is-selected {
    background: ${({ theme }) => theme.colors.secondary};
    color: #000;
    font-weight: bold;
  }
`;
