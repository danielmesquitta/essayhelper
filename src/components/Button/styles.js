import styled from 'styled-components'

import { darken } from 'polished'

export const Container = styled.span`
  display: inline-block;
  margin: 0 .5rem;
  text-align: center;

  a,
  button {
    border: 1px solid #222;
    border-radius: .5rem;
    background: ${props => props.background};
    padding: .7rem 3rem;
    color: #fafafa !important;
    transition: all 0.2s;

    :hover {
      background: ${props => darken(0.08, props.background)};
    }
  }
`
