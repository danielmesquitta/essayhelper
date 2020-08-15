import React from 'react'
import { Link } from 'react-router-dom'

import { colors } from '~/styles/variables'
import { Container } from './styles'

import Button from '~/components/Button'
import PopUp from '~/components/PopUp'

export default function Introduction() {
  return (
    <PopUp>
      <Container>
        <h1>Bem Vindo</h1>
        <p>
          Aqui você irá encontrar as melhores ferramentas para te ajudar a se
          tornar um exímio escritor (pelo menos a nível ENEM 😄)
        </p>
        <p>Não espere mais e comece agora</p>
        <Button background={colors.btnTransparent}>
          <Link to="/configs">Começar</Link>
        </Button>
      </Container>
    </PopUp>
  )
}
