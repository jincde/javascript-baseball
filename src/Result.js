function getBall(ball, inputNumber, answer, includeOfNum) {
  inputNumber.forEach((num, idx) => {
    if (num !== answer[idx]) {
      if (includeOfNum[num]) {
        ball += 1;
      }
    }
  });

  return ball;
}

function getStrike(strike, inputNumber, answer) {
  inputNumber.forEach((num, idx) => {
    if (num === answer[idx]) {
      strike += 1;
    }
  });
  return strike;
}

function createResult(inputNumber, answer) {
  const WHAT_NUMBER = {};
  inputNumber = String(inputNumber).split("");
  answer = String(answer).split("");

  let ball = 0;
  let strike = 0;
  let result = "";

  answer.forEach((temp) => {
    WHAT_NUMBER[temp] = true;
  });

  ball = getBall(ball, inputNumber, answer, WHAT_NUMBER);
  strike = getStrike(strike, inputNumber, answer);

  if (ball > 0) result += `${ball}볼`;
  if (ball > 0 && strike > 0) result += " ";
  if (strike > 0) result += `${strike}스트라이크`;
  if (ball === 0 && strike === 0) result = "낫싱";

  console.log(result);
}

module.exports = createResult;