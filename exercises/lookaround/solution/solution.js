var phrases = ['A twister of twists.', 'My children are angry.', 'I bring my dogs in the park.', 'I left my grey socks for home.']
var regex = /(\w+)(?=s\b)/

phrases.forEach(function (phrase) {
  var result = phrase.match(regex)
  if (result) {
    console.log(result)
  } else {
    console.log()
  }
})
