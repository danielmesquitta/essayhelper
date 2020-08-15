import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdInfoOutline, MdSettings, MdMenu } from "react-icons/md";

import { Header, Container, Essay, Info } from "./styles";
import { colors } from "~/styles/variables";

import Button from "~/components/Button";
import AlignCenter from "~/components/AlignCenter";

import highlightWords from "~/utils/highlightWords";
import separateWords from "~/utils/separateWords";
import countWords from "~/utils/countWords";

export default function Home({ location }) {
  // convert query params to constants
  const {
    mwl: minWordLength,
    mrpw: minRepetitionsPerWord,
  } = Object.fromEntries(
    location.search
      .replace("?", "")
      .split("&")
      .map((query) => {
        let keyAndValue = query.split("=");
        keyAndValue[1] = Number(keyAndValue[1]);
        return keyAndValue;
      })
  );

  const [input, setInput] = useState(<div />);
  const [essay, setEssay] = useState("");
  const [wordsNumber, setWordsNumber] = useState(0);
  const [repeatedWords, setRepeatedWords] = useState([]);
  const [hasRepetitions, setHasRepetitions] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const placeholder = "Digite seu texto aqui...";

  useEffect(() => {
    setInput(document.getElementById("essay"));
  }, []);

  useEffect(() => {
    for (let i in repeatedWords) {
      let [, repetitions] = repeatedWords[i];
      if (repetitions >= (minRepetitionsPerWord || 3)) {
        setHasRepetitions(true);
        break;
      }
      setHasRepetitions(false);
    }
  }, [repeatedWords, minRepetitionsPerWord]);

  function handleEssayClick() {
    if (input.innerText === placeholder) {
      input.innerText = "";
    }
  }

  function handleEssayBlur() {
    if (input.innerText === "") {
      input.innerText = placeholder;
      setHasRepetitions(false);
    }
  }

  function handleEssayChange() {
    setEssay(input.innerText);
    const words = separateWords(essay);
    setWordsNumber(words.length);
    setRepeatedWords(countWords(words, minWordLength));
  }

  function highlightEssay() {
    setIsHighlighted(true);
    input.innerHTML = highlightWords(
      essay,
      repeatedWords,
      minRepetitionsPerWord
    );
    setShowMenu(false);
  }

  function removeHighlights() {
    input.innerText = input.innerText;
    setIsHighlighted(false);
  }

  return (
    <>
      <Header>
        <section>
          <h1>Essay Helper</h1>
          <div>
            <Link to={`/info${location.search}`}>
              <MdInfoOutline color="#fff" size="3.2rem" />
            </Link>

            <Link to="/configs">
              <MdSettings color="#fff" size="3.2rem" />
            </Link>

            <button onClick={() => setShowMenu(!showMenu)}>
              <MdMenu color="#fff" size="3.2rem" />
            </button>
          </div>
        </section>

        <nav>
          {showMenu && (
            <>
              <div>
                {hasRepetitions && input.innerText !== placeholder && (
                  <>
                    <h3>Repetições</h3>
                    <ul>
                      {repeatedWords.map(([word, repetitions]) => {
                        return (
                          repetitions >= (minRepetitionsPerWord || 3) && (
                            <li>
                              <span>{word}:</span> {repetitions} repetições
                            </li>
                          )
                        );
                      })}
                    </ul>
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
                {isHighlighted ? (
                  <AlignCenter>
                    <Button background={colors.mainLight}>
                      <button onClick={removeHighlights}>
                        Remover destaques
                      </button>
                    </Button>
                  </AlignCenter>
                ) : (
                  hasRepetitions && (
                    <AlignCenter>
                      <Button background={colors.mainLight}>
                        <button onClick={highlightEssay}>
                          Destacar repetições
                        </button>
                      </Button>
                    </AlignCenter>
                  )
                )}
              </div>
              <Link to="/configs">
                <MdSettings color="#fff" size="3.2rem" /> Configurações
              </Link>
              <Link to={`/info${location.search}`}>
                <MdInfoOutline color="#fff" size="3.2rem" />
                Observações
              </Link>
            </>
          )}
        </nav>
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
            {hasRepetitions && input.innerText !== placeholder && (
              <>
                <h3>Repetições</h3>
                <ul>
                  {repeatedWords.map(([word, repetitions]) => {
                    return (
                      repetitions >= (minRepetitionsPerWord || 3) && (
                        <li>
                          <span>{word}:</span> {repetitions} repetições
                        </li>
                      )
                    );
                  })}
                </ul>
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

            {isHighlighted ? (
              <AlignCenter>
                <Button background={colors.mainLight}>
                  <button onClick={removeHighlights}>Remover destaques</button>
                </Button>
              </AlignCenter>
            ) : (
              hasRepetitions && (
                <AlignCenter>
                  <Button background={colors.mainLight}>
                    <button onClick={highlightEssay}>
                      Destacar repetições
                    </button>
                  </Button>
                </AlignCenter>
              )
            )}
          </div>
        </Info>
      </Container>
    </>
  );
}
