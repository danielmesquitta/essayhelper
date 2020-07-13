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

    h1 {
      color: #fafafa;
      text-align: center;
      margin: 0 auto 30px;
    }

    > p {
      color: #fafafa;
      margin: 20px 0;
    }

    ul {
      margin-bottom: 30px;

      li {
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          display: block;
          color: #fafafa;
          margin-right: 50px;
        }

        input {
          background: #0000002a;
          border: 1px solid #777;
          color: #fafafa;
          border-radius: 5px;
          width: 50px;
          padding: 2px 5px;
        }
      }
    }

    div {
      text-align: center;

      a,
      button {
        display: inline-block;
        margin: 0 5px;
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
  }
`
