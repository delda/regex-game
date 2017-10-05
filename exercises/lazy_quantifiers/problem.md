As we seen in the previous chapter, quantifiers look for the longest possible expression that may match the demand for regular expression.
Sometimes, we want match as few of the quantified tokens as needed.
So, in contrast to the standard _greedy_ quantifier there are the _lazy_ quantifiers:
* **??**
* **.?**
* **\*?**
* **{n,m}?**

## QUESTION
Write the output for the sequent regex on the word "`Pinturicchio`":
```
/^(.+?)(h|i)(.*?)$/
/^(.+?)(h|i|o)(.+?)/
```

Foreach regex, use the command _console.log_ like:
```
"ciao mondo"
/(ciao) (mondo)(!?)/
console.log('ciao mondo', 'ciao', 'mondo', '___')
```
PS: the first result is the whole substring, without the groups

PPS: the last string "`___`" matches the group "`(!?)`": it does not match anything
