import styled from 'styled-components'
import { colors } from '~/styles/variables'
import { darken } from 'polished'

export const Header = styled.header`
  padding: 5px 10px;
  text-align: center;

  display: flex;

  > div {
    position: fixed;
    right: 20px;
    top: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 120px;
  }

  h1 {
    flex: 1;
    font-size: 40px;
    text-shadow: 0 0 5px black;
    padding: 5px 10px;
    color: #fafafa;
  }

  a {
    background: linear-gradient(
      to right,
      ${colors.mainLight},
      ${colors.mainDark}
    );
    height: 40px;
    width: 40px;
    border-radius: 5px;
    box-shadow: 0 0 5px black;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Container = styled.div`
  margin: 30px 0;

  display: flex;
  justify-content: space-evenly;
`

export const Essay = styled.div`
  padding: 40px;
  width: 675px;
  background: #fafafaee;
  color: #222;
  min-height: 900px;
  border-radius: 2px;
  box-shadow: 0 0 10px #333;
`

export const Info = styled.div`
  background: #fafafa;
  width: 350px;
  align-self: flex-start;
  border-radius: 15px;
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
    padding: 10px 0;
  }

  > div {
    padding: 40px 30px;

    h3 {
      font-weight: normal;
      text-align: center;
    }

    ul {
      margin: 5px 0 25px;

      li {
        display: flex;
        justify-content: space-between;
        padding: 12px 0 6px;
        border-bottom: 2px dashed #0001;
      }
    }

    button {
      margin-bottom: 10px;
    }
  }
`
