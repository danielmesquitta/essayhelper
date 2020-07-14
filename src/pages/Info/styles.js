import styled from 'styled-components'
import { darken } from 'polished'

import { colors } from '~/styles/variables'

export const Container = styled.div`
  a {
    color: ${colors.link};
  }

  h3 {
    margin-top: 10px;
    text-align: center;
    color: #fafafa;
  }

  > div {
    margin-top: 50px;
  }
`
