L'_alternation_ "**|**" è uno dei principali metacaratteri per la scrittura delle espressioni regolari.
Ha la funzione logica dell'_OR_ booleano perché permette la scelta tra una delle sottostringhe:
```
   /stringa_1|stringa_2|stringa_3/

```

## PROBLEMA

Scrivere tre differenti espressioni regolari (una per riga del file da testare) che trovino solo queste tre parole:
_a**cc**eso_, _a**pp**eso_ e _a**rr**eso_.