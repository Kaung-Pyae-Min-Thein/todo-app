import styled from "styled-components";

export const Todo_style = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    190deg,
    rgba(1, 37, 203, 1) 10%,
    rgba(1, 148, 51, 1) 63%
  );

  .wrapper {
    text-align: center;
    border: 0;
    border-radius: 15px;
    padding: 3em;
    min-width: 15em;
    background-color: white;
    h1,
    .showForm {
      margin-bottom: 1.5em;
    }
    .showForm {
      width: 80%;
      background-color: green;
      color: white;
      font-weight: 900;
      font-size: 1.5em;

      border: 0;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
