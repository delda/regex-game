var phrases = [
    'Aiuto! Amico mio!',
    'Casa e lavoro, lavoro e casa',
    'Se io, se lei',
    'Rincasato a casa'],
  regex = /.*\b(\w+)\b.*\b(\1)\b.*/i

phrases.forEach(function (phrase) {
  var result = phrase.match(regex)
  if (result) {
    console.log(result[0])
  } else {
    console.log()
  }
})
