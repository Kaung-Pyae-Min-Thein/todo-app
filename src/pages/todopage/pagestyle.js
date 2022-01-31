import styled from "styled-components";

export const Todo_style = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    text-align: center;
    border: 0;
    border-radius: 15px;
    padding: 3em;
    min-width: 15em;
    box-shadow: 5px 10px 8px 10px #888888;
    h1,
    .showForm {
      margin-bottom: 1.5em;
    }
    .showForm {
      width: 100%;
    }
  }
`;
