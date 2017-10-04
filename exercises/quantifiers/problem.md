A _quantifier_ specifies how many instances of a character, group, or character class must be present in the input for a match to be found.

They are:
* **?** repeats the previous item _zero_ or _one_ time
* **.** repeats the previous item _one_ or _more_ times
* **\*** repeats the previous item _zero_ or _more_ times
* **{n,m}** repeats the previous item between _n_ and _m_ times

By default, a quantifier tells the engine to match as many instances of its quantified token or subpattern as possible. This behavior is called _greedy_. 

## QUESTION
Write the output for the sequent regex on the word "`Pinturicchio`":
```
/(.+)(h|i)(.*)/
/(.+)(h|i|o)(.*)/
```
Foreach regex, use the command _console.log_ like:
```
"ciao mondo"
/(ciao) (mondo)(!?)/
console.log('ciao mondo', 'ciao', 'mondo', '___')
```
PS: the first result is the whole substring, without the groups

PPS: the last string "`___`" matches the group "`(!?)`": it does not match anything
