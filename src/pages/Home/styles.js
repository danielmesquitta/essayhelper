import styled from 'styled-components'
import { colors } from '~/styles/variables'
import { darken } from 'polished'

export const Header = styled.header`
  background: linear-gradient(
    to right,
    ${colors.mainLight},
    ${colors.mainDark}
  );
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 0 10px #333;
  padding: 5px 10px;
  text-align: center;

  display: flex;

  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100px;
  }

  h1 {
    flex: 1;
    font-size: 28px;
    padding: 5px 10px;
    color: #fafafa;
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
        padding: 2px;
        border-bottom: 2px dashed #0001;
      }
    }

    button {
      display: block;
      margin: auto;
      padding: 7px 30px;
      border: 1px solid #222;
      border-radius: 5px;
      background: ${colors.mainLight};
      color: #fafafa;
      transition: all 0.2s;

      :hover {
        background: ${darken(0.08, colors.mainLight)};
      }
    }
  }
`
