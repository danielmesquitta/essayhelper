import React from 'react'
import { Link } from 'react-router-dom'

import { Container, ConfigItem } from './styles'

export default function Configs() {
  return (
    <Container>
      <div>
        <h1>Configurações</h1>
        <p>
          Ajuste as configurações (caso deseje) e assim que estiver pronto,
          pressione o botão OK.
        </p>

        <ul>
          <li>
            <p>nº mínimo de letras na palavra para verificar repetições:</p>
            <input />
          </li>

          <li>
            <p>nº mínimo de repetições para destacar palavra:</p>
            <input />
          </li>

          <li>
            <p>Repetições são ignoradas para:</p>
            <input />
          </li>
        </ul>

        <div>
          <Link to="/home">Ok</Link>
          <button>Resetar configuraçẽos</button>
        </div>
      </div>
    </Container>
  )
}
