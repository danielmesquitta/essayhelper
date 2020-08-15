export default function separateWords(text) {
  return text
    .replace(/[.,/#!$%^&*;:{}[\]=\-_`~()]/g, '')
    .split(' ')
    .filter(word => /\S/.test(word))
    .map(word => word.trim())
}
