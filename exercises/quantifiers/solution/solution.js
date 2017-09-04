var test = 'Pinturicchio',
    res

res = test.match(/(.+)(h|i)(.*)/).slice(1,4).join(' ')
console.log(res)

res = test.match(/(.+)(h|i|o)(.*)/).slice(1,3).join(' ')
console.log(res)