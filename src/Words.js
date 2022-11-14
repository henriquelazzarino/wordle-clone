import wordBank from './wordBank.txt'

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""]
];

export const generateWordSet = async () => {
  let wordSet = [];
  let randomWord;
  await fetch(wordBank).then((res) => res.text()).then((result) => {
    const wordArr = result.split('\n')
    for (let i = 0; i < wordArr.length; i++) {
      wordSet.push(wordArr[i].replace('\r', ''))
    }
    randomWord = wordSet[Math.floor(Math.random() * wordSet.length)]
  })

  return { wordSet, randomWord };
}
