The grouping restricts and catalogs the result of a regular expression.

A pair of parentheses **( )** are the metacharacters of the grouping.

For example, if i would find the group `fonda` in the text "`profonda`", I could use a regex like: `/pro(fonda)/`.
This regex find all the world _profonda_ and also the gruping part _fonda_.

The grouping maybe nested. The nested order follows a simpel rule: 
the nested groups are read from left to right in the pattern, with the first capture group being the contents of the first parentheses group, etc.

Sometimes, you can use a group without groupin with **(? )**:
```
"abcabcabcabcdfg"
/(?:abc){3}.*/
```
In this case, you group "`abc`" to find it three times but it is not interesting the submatch content rather than the full match "`abcabcabcdfg`" (note that the first group "`abc`" is discarded). 

## QUESTION
Find the grouping for the regex `/(ab(cd|ef)((gh)|ij))/` on:
```
"abcdefghij"
"abcdghij"
"abefij"
```

For each text, use the command _console.log()_ like:
```
"ciao mondo"
/(ciao) (mondo)(!?)/
console.log('ciao mondo', 'ciao', 'mondo', '___')
```
PS: the first result is the whole substring, without the groups

PPS: the last string "`___`" matches the group "`(!?)`": it does not match anything