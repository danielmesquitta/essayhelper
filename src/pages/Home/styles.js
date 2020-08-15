import styled from 'styled-components'
import { colors } from '~/styles/variables'

export const Header = styled.header`
  padding: .5rem 1rem;
  text-align: center;

  display: flex;

  > div {
    position: fixed;
    right: 2rem;
    top: 1.6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 12rem;
  }

  h1 {
    flex: 1;
    font-size: 4rem;
    text-shadow: 0 0 .5rem black;
    padding: .5rem 1rem;
    color: #fafafa;
  }

  a {
    background: linear-gradient(
      to right,
      ${colors.mainLight},
      ${colors.mainDark}
    );
    height: 4rem;
    width: 4rem;
    border-radius: .5rem;
    box-shadow: 0 0 .5rem black;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Container = styled.div`
  margin: 3rem 0;

  display: flex;
  justify-content: space-evenly;
`

export const Essay = styled.div`
  padding: 4rem;
  width: 67.5rem;
  background: #fafafaee;
  color: #222;
  min-height: 90rem;
  border-radius: .2rem;
  box-shadow: 0 0 1rem #333;
`

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
      margin: .5rem 0 2.5rem;

      li {
        display: flex;
        justify-content: space-between;
        padding: 1.2rem 0 .6rem;
        border-bottom: .2rem dashed #0001;
      }
    }

    button {
      margin-bottom: 1rem;
    }
  }
`
