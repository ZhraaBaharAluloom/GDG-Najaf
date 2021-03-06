import styled from "styled-components";

export const TextStyled = styled.p`
  margin-top: 25px;
  color: ${(props) => props.theme.backgroundColor};
`;

export const NavBarStyle = styled.div`
  .navbar {
    height: 80px;
    display: flex;
    box-shadow: 10px 10px 8px #888888;
    /* justify-content: center; */
    /* align-items: center; */
    font-size: 1.2rem;
  }

  .navbar-logo {
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
  }

  /* .fa-firstdraft {
    margin-left: 0.5rem;
    font-size: 1.6rem;
  } */

  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 15px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
  }

  .nav-item {
    display: flex;
    float: right;
    /* align-items: center; */
    height: 55px;
  }

  .nav-links {
    color: grey;
    text-decoration: none;
    padding: 1rem 0.3rem;
  }

  .nav-links:hover {
    background-color: black;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }

  .fa-bars {
    color: grey;
  }

  .nav-links-mobile {
    display: none;
  }

  .menu-icon {
    display: none;
  }

  @media screen and (max-width: 960px) {
    .NavbarItems {
      position: relative;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      background: #242222;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }

    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }

    .nav-links:hover {
      background-color: white;
      border-radius: 0;
    }

    .navbar-logo {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(30%);
    }

    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }

    .fa-times {
      color: grey;
      font-size: 2rem;
    }

    .nav-links-mobile {
      display: block;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto 2rem auto;
      border-radius: 4px;
      width: 80%;
      background: #1888ff;
      text-decoration: none;
      color: #fff;
      font-size: 1.5rem;
    }

    .nav-links-mobile:hover {
      background: #fff;
      color: #1888ff;
      transition: 250ms;
    }

    button {
      display: none;
    }
  }
`;
