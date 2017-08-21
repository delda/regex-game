Benvenuto in *regex-game*!
 
*regex-game* è un semplice gioco per ripassare ed approfondire la conoscenza delle espressioni regolari.

Per superare il livello introduttivo, scrivi in un file con estensione `.js` 
l'espressione regolare che cerca la stringa `Hello Word!` utilizzando la funzione [match](https://www.w3schools.com/Jsref/jsref_match.asp):
```
result = str.match(/.../)
```
Per provare il codice puoi utilizzare node:
```
    $ node file_to_test.js
```
Quando ritieni che il tuo software soddisfi le richieste del gioco, puoi provare il tuo programma con i test del software: 
```
    $ {appname} run file_to_test.js
``` 
Infine, puoi provare a superare il livello eseguendo l'istruzione:
```
    $ {appname} verify file_to_test.js
```