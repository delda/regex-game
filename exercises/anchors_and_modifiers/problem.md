The _anchors_ are special metacharacters because the don't find a text but a _position_ in a text.
In this exercise, we are talking about:
- the _curet_ **^** (or **\A**): it matches the position before the first character in the string
- the _sollar_ **$** (or **\Z** or **\z**): it matches right after the last character in the string

If we find the regular expression `/^abc/` into "`abcd`", the engine positions the search in the first position and then the sequence `abc` matches "`abc`".

---
The _modifiers_ alters the regex engine. For example, **/m** enhanced line-anchor match mode:
- **.** matches any character except the new line
- **^** anchors to start of every line
- **$** anchors to end of every line

## QUESTION

For each regex 
```
/.*/
/.*$/
/^cd/m
/^.cd/m
/^ab.cd$/m
/^cd$/m
```
write the results applied to the text: "`ab\ncd`".
You write each the results in a _console.log()_ command. 