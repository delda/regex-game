Knowing how the regex engine works enables you to craft better regexes more easily.
The major regex engines are the DFA (Deterministic Finite Automata) and the NFD (NonDeterministic Finite Automata).
Every engine has specific rules but there are two all-encompassing rules.

Here it is the first:
**The match that begins earliest (leftmost) wins**
The engine attempt to match from beginning of the string.
If it matches, the engine mark the character and continues from next character.
For example, given the text: 

"`Controlla se c'è l'insaccato nella sacca`"

the pattern `/sacca/` give as result:

"`Controlla se c'è l'in`**sacca**`to nella sacca`"

The match is in "`insaccato`", not at the word "`sacca`" that appears later in the line.
This word "`sacca`" _could_ match, but the "`sacca`" in "`insaccato`" appears earlier in the string,
so it is the one matched.

## QUESTION
Given: "`Uno scontro tra titani ha conseguenze disastrose.`", write in _console.log_ the match of the regular expression: 
```
   /disastro|segue|tra|titani/
```