import styled from "styled-components";

export const HomeImageStyle = styled.img`
  width: 10em;
  /* float: left; */
`;

export const HomeWrapper = styled.div`
  text-align: center;
  margin: 5em auto auto auto;
  display: flex;
  justify-content: center;
  p {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-weight: bold;
    font-size: 1.5em;
    color: #707070;
  }
`;

export const CardWrapper = styled.div`
  &.container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CardTextStyle = styled.div`
  margin-bottom: 1em;
`;
export const IconStyle = styled.img`
  width: 18px;
  margin-right: 10px;
  float: left;
  display: block;
`;
