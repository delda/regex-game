var phrases = [
    'Ciao Mondo',
    'Hello World',
    'Hello World!',
    'hello world',
    'hello world!'],
  result,
  regex = /Hello World!/

phrases.forEach(function (phrase) {
  result = phrase.match(regex)
  if (result) {
    console.log(result)
  } else {
    console.log()
  }
})
