import styled from "styled-components";

export const TeamListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4em 2em auto 2em;

  img {
    border-radius: 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  p {
    text-align: center;
    padding-top: 1em;
  }
`;

export const TeamTitleStyle = styled.h3`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin: 2em;
  display: block;
  span {
    color: blue;
  }
`;
