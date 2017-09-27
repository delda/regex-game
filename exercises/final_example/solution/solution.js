var phrases = [
  'password',
  'passWord',
  '123passWord',
  '123passWord@@@',
  '123passWord@@@csdcsdcsdcsd']
var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*$@#])^[\d\w@*$#]{2,15}$/

phrases.forEach(function (phrase) {
  var result = phrase.match(regex)
  if (result) {
    console.log(result[0])
  } else {
    console.log()
  }
})
