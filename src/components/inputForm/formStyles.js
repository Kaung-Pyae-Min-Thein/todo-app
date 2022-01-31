import styled from "styled-components";

export const Form_style = styled.div`
  visibility: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  .form-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
  form {
    text-align: center;
  }

  input,
  textarea {
    margin-bottom: 1em;
    width: 100%;
  }
  &.active {
    background-color: rgba(0, 0, 0, 0.9);
    visibility: visible;
    opacity: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
