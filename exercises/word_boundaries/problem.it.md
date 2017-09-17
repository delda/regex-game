Il simbolo **\b** _boundary_ appartiene al gruppo di metacaratteri _a lunghezza zero_ perché, come già visto con le ancore **^** e **$**, cerca una posizione nella stringa di ricerca senza "consumare" alcun carattere.

Il metacarattere **\b** indica se un modello inizia o finisce su un confine di parola.
Al contrario, il metacarattere **\B** cerca un modello che inizia e finisce all'interno di una parola.

Per esempio, se cerchiamo l'espressione regolare `/\bcane\b/` nella frase "`Il cane insegue la palla`", l'engine cercherà una posizione al confine di una parola seguita dai caratteri "`c`", "`a`", "`n`" e per finire la "`e`"; infine, cerca se il successivo carattere non sia una parola come richiesto dal carattere boundary **\b**. 
 
## PROBLEMA

Trovare la soluzione ai seguenti quesiti, sostituendo il match con gli underscore.
```
  "barbar!e"

/bar\b/
/bar\B/
```

Per esempio, se dovessi cercare `/va/` in "`trovato`", dovrei scrivere:
_console.log("tro__to")_