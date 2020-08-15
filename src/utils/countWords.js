export default function countWords(words, minWordLength) {
  const repeatedWordsObj = {}
  words.map(word => {
    const formattedWord = word.toLowerCase()
    if (word.length >= (minWordLength || 4)) {
      repeatedWordsObj[formattedWord] =
        (repeatedWordsObj[formattedWord] || 0) + 1
    }
  })

  return Object.entries(repeatedWordsObj)
}
