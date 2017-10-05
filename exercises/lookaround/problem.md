The _lookarounds_ are like the _boundaries_ characters **\b** or the _anchors_ **^** and **$**: these metacharacters do not find a string but only a _position_ into a string.

A kind of lookaround is the _lookahead_ that find a sequence of characters and, if matched, it positions on the start of subsequence without "burn" any character.

For example, if I find `/(?=casacche)casa/` into "`casacche`", I have the lookahead look for the word "`casacche`" and, once found, it mark the starting position of the match.
Finally, the engine starts the search of the word "`casa`".

Another example of lookaround is the _lookbehind_.
Lookbehind has the same effect of the loohahead, but works backwards.
It tells the regex engine to temporarily step backwards in the string, to check if the text inside the lookbehind can be matched there. 

If you find `/(<=casa)cche/` into "`casacche`" i have "`cche`" as result. 

PS: **XRegExp** is the regex engine of JavaScript and _NOT_ supports the _lookbehind_.

## QUESTION
Given the following sentences in english, find all the plural words and return them at singular (using the _lookahead_). 

```
A twister of twists.
My children are angry.
I bring my dogs in the park.
I left my grey socks for home.
```
PS: For semplicity, the plural words are all regular.
