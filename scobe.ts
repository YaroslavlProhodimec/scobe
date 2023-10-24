const str = "{[[]{}]}()()";

function func(scobeInput) {
  let arr = [];

  let scobe = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  for (let i = 0; i < scobeInput.length; i++) {
    let char = scobeInput[i];
    if (indexOf(char)) {
      if (arr.pop() !== scobe[char]) {
        return false;
      }
    } else {
      arr.push(char);
    }
  }
  return arr.length === 0;
}
const indexOf = (scobe) => {
  return ["}", "]", ")"].includes(scobe);
};

console.log(func(str));
