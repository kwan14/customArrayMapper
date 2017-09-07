
var words = ["ground", "control", "to", "major", "tom"];

function map (array, cb) {
  newArray = [];
  for (var i = 0; i < array.length; i++) {
    var newWord = cb(array[i]);
    newArray.push(newWord);
  }
  return newArray;
}


var length = map(words, function(word) {
  return word.length;
});

var uppercase = map(words, function(word) {
  return word.toUpperCase();
});

var reverse = map(words, function(word) {
  return word.split('').reverse().join('');
});



console.log(length);
console.log(uppercase);
console.log(reverse);

