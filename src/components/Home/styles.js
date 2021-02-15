import styled from "styled-components";

export const HomeImageStyle = styled.img`
  width: 10em;
  /* float: left; */
`;

export const HomeWrapper = styled.div`
  text-align: center;
  margin: 5em 5em auto 5em;
  display: flex;
  justify-content: center;
  p {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-weight: bold;
    font-size: 25px;
    color: #707070;
  }
`;

export const CardWrapper = styled.div`
  box-shadow: 10px 10px 8px #888888;
  margin: 2em 0.5em auto 0.5em;
`;

export const CardTextStyle = styled.p`
  display: inline-flex;
  color: #3d3d3d;
  width: 25%;
  text-align: justify;
  margin-right: 4.5em;
`;
export const IconStyle = styled.img`
  width: 18px;
  margin-right: 10px;
  float: left;
  display: block;
`;
