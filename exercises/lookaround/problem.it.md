Le _lookaround_ sono molto simili ai caratteri _boundary_ come **\b**
 o alle ancore **^** e **$**: questi metacaratteri infatti, non cercano una stringa bensì una _posizione_
  nella stringa.

Un tipo di lookaround è la _lookahead_ che cerca una sequenza di caratteri e, se la trova, si posiziona nel punto di partenza della sottosequenza senza "bruciare" alcun carattere.

Per esempio, se cerco `/(?=casacche)casa/` nella stringa "`casacche`" avrò che la lookahead cercherà la parola "`casacche`" e, una volta trovata, segnerà la posizione di partenza del match.
Infine, da quella posizione inizierà la ricerca della parola "`casa`".

Un altro esempio di lookaround è la _lookbehind_, la quale a differenza della sua "gemella" lookahead, cerca il contenuto della lookaround e poi si posiziona dopo l'ultimo carattere trovato.

Per esempio, se cerco `/(<=casa)cche/` nella stringa "`casacche`"
 otterrò come risultato "`cche`".

NB: **XRegExp** è l'engine delle espressioni regolari per JavaScript e _NON_
 supporta la _lookbehind_.

## PROBLEMA
Date le seguenti frasi in inglese, trovare tutte le parole che sono al plurale e restituirle al singolare (utilizzando le _lookahead_).

```
A twister of twists.
My children are angry.
I bring my dogs in the park.
I left my grey socks for home.
```
NB: Per semplicità, le parole plurali sono tutte regolari.
