export default function highlightWords(
  essay,
  repeatedWords,
  minRepetitionsPerWord
) {
  let colorIndex = Math.floor(Math.random() * 10)

  let highlightedEssay = essay

  repeatedWords.map(([word, repetitions]) => {
    if (repetitions >= (minRepetitionsPerWord || 3)) {
      highlightedEssay = highlightedEssay.replace(
        new RegExp('(?<![a-zA-Z])' + word + '(?![a-zA-Z])', 'gi'),
        `<span class="color${colorIndex}">${word}</span>`
      )

      colorIndex++
      if (colorIndex === 10) {
        colorIndex = 0
      }
    }
  })

  return highlightedEssay
}
