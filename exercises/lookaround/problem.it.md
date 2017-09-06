I costrutto delle _lookaround_ è molto simile ai caratteri _boundary_ come **\b** o le ancore **^** e **$** le quali non trovano il testo bensì la _posizione_ nel testo.

Un tipo di lookaround è la _lookahead_ che cerca una sequenza di caratteri e, se la trova, segna la posizione di partenza della sottosequenza.

Per esempio, se cerco `/(?=casacche)casa/` nella stringa `casacche` avrò che la lookahead cercherà la parola `casacche` e, una volta trovata, segnerà la posizione di partenza del match.
Infine, da quella posizione inizierà la ricerca della parola `casa`.

Un altro esempio di lookaround è la _lookbehind_, la quale a differenza della sua "gemella" lookahead, cerca il contenuto della lookaround e poi si posiziona dopo l'ultimo carattere trovato.

Per esempio, se cerco `/(<=casa)cche/` nella consueta stringa `casacche` otterrò come risultato `cche`.

## PROBLEMA
Date le seguenti frasi in inglese, trovare tutte le parole che sono al plurale e restituirle al singolare (utilizzando le _lookaround_).

```
A twister of twists
My children are angry
I bring my dogs in the park
I left my grey socks for home
```