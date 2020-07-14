import React from 'react'

import { Container } from './styles'

export default function Button({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>
}
