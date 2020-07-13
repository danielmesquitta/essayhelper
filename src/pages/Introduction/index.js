import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

export default function Introduction() {
  return (
    <Container>
      <div>
        <h1>Bem Vindo</h1>
        <p>
          Aqui você irá encontrar as melhores ferramentas para te ajudar a se
          tornar um exímio escritor (pelo menos a nível ENEM 😄)
        </p>
        <p>Não espere mais e comece agora</p>
        <Link to="/configs">Começar</Link>
      </div>
    </Container>
  )
}
