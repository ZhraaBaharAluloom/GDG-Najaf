import styled from "styled-components";

export const HomeImageStyle = styled.img`
  @media screen and (max-width: 900px) and (min-width: 400px),
    (min-width: 1100px) {
    width: 10em;
  }

  @media screen and (max-width: 375px) {
    width: 3em;
  }
`;

export const HomeWrapper = styled.div`
  text-align: center;
  margin: 5em auto auto auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  p {
    /* font-family: Impact, Haettenschweiler, Arial Narrow Bold", sans-serif; */
    font-weight: bold;
    @media screen and (max-width: 900px) and (min-width: 700px),
      (min-width: 1100px) {
      font-size: 25px;
    }
    @media screen and (max-width: 200px) {
      font-size: 12px;
    }
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
