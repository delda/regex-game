var phrases = [
  'JavaScript è proprio una 💩!',
  'Io invece 💙 JavaScript...',
  'Il 🔆  e la 🌜']
var result
var regex = /[\u0000-\u007F]+/

phrases.forEach(function (phrase) {
  result = phrase.match(regex)
  if (result) {
    console.log(result)
  } else {
    console.log()
  }
})
