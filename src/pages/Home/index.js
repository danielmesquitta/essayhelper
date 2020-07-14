import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdInfoOutline, MdSettings } from 'react-icons/md'

import { Header, Container, Essay, Info } from './styles'
import separateWords from '~/services/separateWords'
import countWords from '~/services/countWords'

export default function Home() {
  const [input, setInput] = useState(<div />)
  const [essay, setEssay] = useState('')
  const [wordsNumber, setWordsNumber] = useState(0)
  const [repeatedWords, setRepeatedWords] = useState([])
  const [hasRepetitions, setHasRepetitions] = useState(false)
  const placeholder = 'Digite seu texto aqui...'

  useEffect(() => {
    setInput(document.getElementById('essay'))
  }, [])

  useEffect(() => {
    repeatedWords.map(([key, value]) => {
      if (value >= 3 && key.length >= 4) {
        setHasRepetitions(true)
        return
      }
      setHasRepetitions(false)
    })
  }, [repeatedWords])

  function handleEssayClick() {
    if (input.innerText === placeholder) {
      input.innerText = ''
    }
  }

  function handleEssayBlur() {
    if (input.innerText === '') {
      input.innerText = placeholder
    }
  }

  function handleEssayChange() {
    setEssay(input.innerText)
    const words = separateWords(essay)
    setWordsNumber(words.length)
  }

  function verifyEssay() {
    const words = separateWords(essay)
    setRepeatedWords(countWords(words))
  }

  return (
    <>
      <Header>
        <h1>Essay Helper</h1>
        <div>
          <Link to="/info">
            <MdInfoOutline color="#fff" size={32} />
          </Link>

          <Link to="/configs">
            <MdSettings color="#fff" size={32} />
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
            {hasRepetitions && input.innerText !== placeholder ? (
              <>
                <h3>Repetições</h3>
                <ul>
                  {repeatedWords.map(([key, value]) => {
                    return (
                      value >= 3 && (
                        <li>
                          <span>{key}:</span> {value} repeticões
                        </li>
                      )
                    )
                  })}
                </ul>
              </>
            ) : (
              <>
                <h3>Seu texto não possui palavras com mais de 2 repetições</h3>
                <br />
              </>
            )}

            <ul>
              <li>
                <span>Caracteres:</span> {essay.length}
              </li>
              <li>
                <span>Palavras:</span> {wordsNumber}
              </li>
              <li>
                <span>Linhas:</span> {Math.ceil(essay.length / 66)}
              </li>
            </ul>

            <button onClick={verifyEssay}>Verificar repetições</button>
          </div>
        </Info>
      </Container>
    </>
  )
}
