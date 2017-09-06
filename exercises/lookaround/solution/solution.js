var phrases = ['A twister of twists', 'My children are angry', 'I bring my dogs in the park', 'I left my grey socks for home'],
    result,
    regex = /.*\b(.*)(?=s\b).*/

phrases.forEach(function (phrase) {
    result = phrase.match(regex)
    if (result) {
        console.log(result)
    } else {
        console.log()
    }
})
