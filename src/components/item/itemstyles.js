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
    align-items: center;
    button {
      background-color: red;
      color: white;
      padding: 0.5em 0.8em;
      border: 0;
      border-radius: 0 7px 7px 0;
      visibility: hidden;
      cursor: pointer;
      &.active {
        visibility: visible;
      }
    }
  }
  .description {
    display: none;
    &.expand {
      display: block;
      text-align: left;
      margin-top: 0.5em;
      padding-top: 0.5em;
      border-top: 2px solid rgba(105, 105, 105, 0.5);
    }
  }
`;
