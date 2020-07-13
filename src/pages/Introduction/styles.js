import styled from 'styled-components'
import { colors } from '~/styles/variables'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  > div {
    max-width: 700px;
    background: linear-gradient(
      to right,
      ${colors.mainLight},
      ${colors.mainDark}
    );
    padding: 60px;
    border-radius: 5px;
    box-shadow: 0 0 40px black;
    text-align: center;

    h1 {
      color: #fafafa;
      text-align: center;
      margin: 0 auto 30px;
    }

    p {
      color: #fafafa;
      margin: 20px 0;
    }

    a {
      display: inline-block;
      padding: 7px 30px;
      border: 1px solid #222;
      border-radius: 5px;
      background: #0000002a;
      color: #fafafa;
      transition: all 0.2s;

      :hover {
        background: #0000003a;
      }
    }
  }
`
