import styled from "styled-components";
import { colors, breakpoints } from "~/styles/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  > div {
    width: 100%;
    max-width: 70rem;
    background: linear-gradient(
      to right,
      ${colors.mainLight},
      ${colors.mainDark}
    );
    padding: 6rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 4rem black;

    h1 {
      color: #fafafa;
      text-align: center;
      margin: 0 auto 3rem;
    }

    p {
      color: #fafafa;
    }

    @media screen and (max-width: ${breakpoints.small}) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100vh;
      padding: 1.5rem;
    }
  }
`;
