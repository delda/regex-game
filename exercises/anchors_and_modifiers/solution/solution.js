var string = "ab\ncd";

console.log(string.match(/.*/)[0]);
console.log(string.match(/.*$/)[0]);
console.log(string.match(/^cd/m)[0]);
console.log(string.match(/^.cd/m) || '');
console.log(string.match(/^ab.cd$/m) || '');
console.log(string.match(/^cd$/m)[0]);