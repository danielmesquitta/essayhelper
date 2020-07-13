import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdInfoOutline, MdSettings } from 'react-icons/md'

import { Header, Container, Essay, Info } from './styles'

export default function Home() {
  const [essay, setEssay] = useState('')

  function handleEssayClick() {
    const input = document.getElementById('essay')
    if (input.innerHTML === 'Digite seu texto aqui...') {
      input.innerHTML = ''
      return
    }
  }

  function handleEssayChange() {
    const input = document.getElementById('essay')
    setEssay(input.innerHTML)
  }

  function handleEssayBlur() {
    const input = document.getElementById('essay')
    input.innerText = 'Digite seu texto aqui...'
  }

  function verifyEssay() {}

  return (
    <>
      <Header>
        <h1>Essay Helper</h1>
        <div>
          <Link to="/info">
            <MdInfoOutline color="#fafafa" size={28} />
          </Link>

          <Link to="/configs">
            <MdSettings color="#fafafa" size={28} />
          </Link>
        </div>
      </Header>
      <Container>
        <Essay
          id="essay"
          contentEditable={true}
          onClick={handleEssayClick}
          onKeyUp={handleEssayChange}
          onBlur={handleEssayBlur}
        >
          Digite seu texto aqui...
        </Essay>

        <Info>
          <h2>Informações</h2>

          <div>
            <h3>Repetições</h3>
            <ul>
              <li>
                <span>Amor:</span> 3 repeticões
              </li>
              <li>
                <span>Amor:</span> 3 repeticões
              </li>
              <li>
                <span>Amor:</span> 3 repeticões
              </li>
              <li>
                <span>Amor:</span> 3 repeticões
              </li>
            </ul>

            <h3>Outras Informações</h3>
            <ul>
              <li>
                <span>Caracteres:</span> 17
              </li>
              <li>
                <span>Palavras:</span> 17
              </li>
              <li>
                <span>Linhas:</span> 17
              </li>
            </ul>

            <button onClick={verifyEssay}>Verificar</button>
          </div>
        </Info>
      </Container>
    </>
  )
}
