const repeatedWords = [
  ['b', 1],
  ['c', 1],
  ['a', 5],
]

;(() => {
  repeatedWords.map(([key, value]) => {
    if (value > 2) {
      console.log('entered')
      haveRepetitions = true
      return
    }
  })
  console.log('bug')
  haveRepetitions = false
})()
