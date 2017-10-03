The metacharacter **\b** is an anchor like the caret and the dollar sign.
It matches at a position that is called a "word boundary".
This match is zero-length.

There are three different positions that qualify as word boundaries:
- Before the first character in the string, if the first character is a word character.
- After the last character in the string, if the last character is a word character.
- Between two characters in the string, where one is a word character and the other is not a word character.

For example, if we match the regular expression `/\bcane\b/` into "`Il cane insegue la palla`", 
the engine matches a word boundary followed by "`c`", "`a`", "`n`" and the "`e`";
finally, fine if the next character is boundary **\b**. 
 
## QUESTION
Find the solution to the follow questions; substitute the match with underscores.
```
  "barbar!e"

/bar\b/
/bar\B/
```

For example, if I would find `/va/` in "`trovato`", I could write:
_console.log("tro__to")_