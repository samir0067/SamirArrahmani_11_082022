export function formatQueryParams(answers) {
  const answerNumbers = Object.keys(answers);

  return answerNumbers.reduce((previousParams, answersNumber, index) => {
    const isFirstAnswer = index === 0;
    const separator = isFirstAnswer ? "" : "&";
    return `${previousParams}${separator}a${answersNumber}=${answers[answersNumber]}`;
  }, "");
}
