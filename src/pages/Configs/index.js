import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'
import PopUp from '~/components/PopUp'
import Button from '~/components/Button'
import AlignCenter from '~/components/AlignCenter'
import { colors } from '~/styles/variables'

export default function Configs() {
  const [minWordLength, setMinWordLength] = useState(4)
  const [minRepetitionsPerWord, setMinRepetitionsPerWord] = useState(3)

  function handleResetConfigs() {
    setMinWordLength(4)
    setMinRepetitionsPerWord(3)
  }

  return (
    <PopUp>
      <Container>
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
          <AlignCenter>
            <Button background={colors.btnTransparent}>
              <Link to="/home">Ok</Link>
            </Button>

            <Button background={colors.btnTransparent}>
              <button onClick={handleResetConfigs}>
                Resetar configuraçẽos
              </button>
            </Button>
          </AlignCenter>
        </div>
      </Container>
    </PopUp>
  )
}
