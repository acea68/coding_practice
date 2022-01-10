function repeatString(string, num) {
  let repeat = "";
  for (let i = 0; i < num; i++) {
    repeat += string;
  }
  return repeat;
}
var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'