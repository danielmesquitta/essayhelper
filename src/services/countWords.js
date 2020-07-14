export default function countWords(words) {
  const repeatedWordsObj = {}
  words.map(word => {
    const formattedWord = word.toLowerCase()
    if (word.length >= 4) {
      repeatedWordsObj[formattedWord] =
        (repeatedWordsObj[formattedWord] || 0) + 1
    }
  })

  return Object.entries(repeatedWordsObj)
}
