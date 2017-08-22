Le _ancore_ sono dei metacaratteri speciali perchè non cercano un testo quanto piuttosto una _posizione_ nel testo.
Le due ancore che analizziamo in questo livello sono:
- il _circonflesso_ **^** (ma anche **\A**) indica di cercare il contenuto dell'espressione regolare dall'inizio di una linea
- il _dollaro_ **$** (ma anche **\Z** o **\z**) indica che l'espressione regolare deve terminare con la fine di una linea

Se cerchiamo infatti l'espressione regolare /^abc/ in 'abcd' il caratte ^ posiziona la ricerca nella prima posizione del testo senza però cercare alcun carattere. Sarà la successiva sequeza 'abc' a combaciare con il testo e a ritornare un risultato.

I _modificatori_, invece, permetto di alterare il comportamento del motore delle regex. Per esempio, utilizzando il modificatore /m, la stringa è interpreatat come una successione di linee ed in particolare:
- **.** matcha qualsiasi carattere ad esclusione del newline
- **^** ancora ad inizio di ogni riga
- **$** ancora alla fine di ogni riga

## PROBLEMA

Indicare il risultato per ognuna delle seguenti espressioni regolari utilizzando un comando console.log(msg [, subst1, ..., substN]) per ogni risultato:

```
"ab\ncd"

/.*/
/.*$/
/^cd/m
/^.cd/m
/^ab.cd$/m
/^cd$/m
```