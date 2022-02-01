import styled from "styled-components";

export const Item_Style = styled.div`
  padding: 1em;
  margin-bottom: 1em;

  /* border: 2px solid rgba(128, 128, 128, 0.7); */
  box-shadow: 0 0 8px #888888;
  border-radius: 15px;

  .title {
    display: flex;
    justify-content: space-between;
    button {
      background-color: red;
      color: white;
      padding: 0.5em 0.8em;
      border: 0;
      border-radius: 0 7px 7px 0;
    }
  }
`;
