The second (anche last) general rule for regular expression is:

**The standard quantifiers are _greedy_**

Questa regola è stata in parte, già analizzata quando abbiamo introdotto i _quantificatori_.
In quella circostanza, abbiamo evidenziato che l'engine tenta di trovare la più ampia sottostringa che verifichi il pattern.

If I find the age with the regex `/.*(\d+)/` into "`Ho 37 anni`",
`/.*/` is forced to relinquish some of what it had matched because the subsequent `/(\d+)/` requires a match to be successful.
In this example, that means unmatching the final period and "`7`", which then allows `/(\d+)/` to match.

## QUESTION
Write the solution for the following three regex on text:

"`Sono stati 56388480 i residenti in Italia nel 1980.`"

```
    /.*(\d+)/
    /.*(\d*)/
    /(\d+)(?!.*\d)/
```