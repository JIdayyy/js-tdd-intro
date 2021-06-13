const assert = require("assert");

assert.strictEqual(typeof capitalizeFirstLettre, "function");
assert.strictEqual(capitalizeFirstLettre.length, 1);
assert.strictEqual(capitalizeFirstLettre("javascript test"), "Javascript Test");
assert.strictEqual(capitalizeFirstLettre("a"), "A");
assert.strictEqual(capitalizeFirstLettre(""), "");

function capitalizeFirstLettre(words) {
  var separateWord = words.toLowerCase().split(" ");
  for (var i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  console.log(separateWord.join(" "));
  return separateWord.join(" ");
}

capitalizeFirstLettre("Salut mec");
