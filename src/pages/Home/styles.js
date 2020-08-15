import styled from "styled-components";
import { colors, breakpoints } from "~/styles/variables";

export const Header = styled.header`
  position: sticky;
  z-index: 2;
  top: 0;
  left: 0;
  background: linear-gradient(
    to right,
    ${colors.mainLight},
    ${colors.mainDark}
  );

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 0.5rem black;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      text-align: center;
      flex: 1;
      font-size: 3rem;
      text-shadow: 0 0 0.5rem black;
      padding: 1rem 0;
      color: #fafafa;
    }

    a,
    button {
      background: transparent;
      border: none;
      height: 4rem;
      width: 4rem;
      margin: 0 1rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      display: none;
    }
  }

  nav {
    color: #fafafa;
    > div {
      padding: 1rem 3rem;

      h3 {
        font-weight: normal;
        text-align: center;
      }

      ul {
        margin: 0.5rem 0 2.5rem;

        li {
          display: flex;
          justify-content: space-between;
          padding: 1.2rem 0 0.6rem;
          border-bottom: 0.2rem dashed #fafafa11;
        }
      }

      button {
        margin-bottom: 1rem;
      }
    }

    a {
      color: #fafafa;
      display: flex;
      align-items: center;
      padding: 1rem 3rem;
      border-top: 0.2rem dashed #fafafa11;

      svg {
        margin-right: 1rem;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    section {
      h1 {
        text-align: start;
        padding: 1rem;
      }

      > div {
        button {
          display: inline;
        }

        > a {
          display: none;
        }
      }
    }
  }
`;

export const Container = styled.div`
  margin: 3rem 0;

  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: ${breakpoints.small}) {
    margin: 0;
  }
`;

export const Essay = styled.div`
  padding: 4rem;
  width: 67.5rem;
  background: #fafafaee;
  color: #222;
  min-height: 90rem;
  border-radius: 0.2rem;
  box-shadow: 0 0 1rem #333;

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 2rem 1rem;
  }
`;

export const Info = styled.div`
  background: #fafafa;
  width: 35rem;
  align-self: flex-start;
  border-radius: 1.5rem;
  overflow: hidden;

  h2 {
    background: linear-gradient(
      to top,
      ${colors.mainLight},
      ${colors.mainDark}
    );

    color: #fafafa;
    text-align: center;
    font-weight: normal;
    padding: 1rem 0;
  }

  > div {
    padding: 4rem 3rem;

    h3 {
      font-weight: normal;
      text-align: center;
    }

    ul {
      margin: 0.5rem 0 2.5rem;

      li {
        display: flex;
        justify-content: space-between;
        padding: 1.2rem 0 0.6rem;
        border-bottom: 0.2rem dashed #0001;
      }
    }

    button {
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    display: none;
  }
`;
