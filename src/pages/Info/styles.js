import styled from 'styled-components'

import { colors } from '~/styles/variables'

export const Container = styled.div`
  a {
    color: ${colors.link};
  }

  h3 {
    margin-top: 1rem;
    text-align: center;
    color: #fafafa;
  }

  > div {
    margin-top: 5rem;
  }
`
