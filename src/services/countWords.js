export default function countWords(words) {
  const repeatedWordsObj = {}
  words.map(
    word => (repeatedWordsObj[word] = (repeatedWordsObj[word] || 0) + 1)
  )

  return Object.entries(repeatedWordsObj)
}
