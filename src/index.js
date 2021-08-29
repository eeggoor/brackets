module.exports = function check(str, bracketsConfig) {
  let newStr = str;
  for (let i = 0; i < bracketsConfig.length * 2; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      let subStr = bracketsConfig[j][0] + bracketsConfig[j][1];
      for (let j = 0; j < str.length / 2; j++) {
        newStr = newStr.replace(subStr, '');
      }
    }
    if (newStr.length === 0) return true;
  }
  if (newStr.length > 0) return false;
}
