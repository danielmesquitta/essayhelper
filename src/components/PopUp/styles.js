import styled from 'styled-components'
import { colors } from '~/styles/variables'

export const Container = styled.div`
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

    h1 {
      color: #fafafa;
      text-align: center;
      margin: 0 auto 30px;
    }

    p {
      color: #fafafa;
    }
  }
`
