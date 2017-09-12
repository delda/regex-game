Le _ancore_ sono dei metacaratteri speciali perchè non cercano un testo quanto piuttosto una _posizione_ nel testo.
Le due ancore che analizziamo in questo livello sono:
- il _circonflesso_ **^** (o **\A**): indica di cercare il contenuto dell'espressione regolare dall'inizio della stringa
- il _dollaro_ **$** (o **\Z** o **\z**): indica che l'espressione regolare deve terminare con la fine della stringa

Se cerchiamo infatti l'espressione regolare `/^abc/` nella stringa "`abcd`", il caratte **^** posiziona la ricerca nella prima posizione del testo senza però cercare alcun carattere.
Sarà la successiva sequeza `abc` a combaciare con il testo della stringa e a dare il risultato atteso: "`abc`".

---
I _modificatori_ invece, permettono di alterare il comportamento del motore delle regex. Per esempio, utilizzando il modificatore **/m**, la stringa è interpretata come una successione di linee ed in particolare:
- **.** trova qualsiasi carattere ad esclusione del newline
- **^** ancora ad inizio di ogni riga
- **$** ancora alla fine di ogni riga

## PROBLEMA

Indicare il risultato delle seguenti espressioni applicata alla prima stringa elencata.
Scrivere i risultati ciascuno in un comando _console.log()_.

"`ab\ncd`"
```
/.*/
/.*$/
/^cd/m
/^.cd/m
/^ab.cd$/m
/^cd$/m
```