import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

export default function Configs() {
  const [minWordLength, setMinWordLength] = useState(4)
  const [minRepetitionsPerWord, setMinRepetitionsPerWord] = useState(3)

  function handleResetConfigs() {
    setMinWordLength(4)
    setMinRepetitionsPerWord(3)
  }

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
            <input
              type="number"
              value={minWordLength}
              onChange={e => setMinWordLength(e.target.value)}
            />
          </li>

          <li>
            <p>nº mínimo de repetições para destacar palavra:</p>
            <input
              type="number"
              value={minRepetitionsPerWord}
              onChange={e => setMinRepetitionsPerWord(e.target.value)}
            />
          </li>
        </ul>

        <div>
          <Link to="/home">Ok</Link>
          <button onClick={handleResetConfigs}>Resetar configuraçẽos</button>
        </div>
      </div>
    </Container>
  )
}
