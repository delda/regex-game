Il raggruppamento è un importante aspetto delle espressioni regolari perchè permette di restringere e/o catalogare il risultato di un'espressione regolare.

Il metacarattere di raggruppamento è la coppia di parentesi tonde: **( )**

Per esempio, se volessi cercare il gruppo `fonda` nella stringa "`profonda`", dovrei utilizzare un'espressione regolare del tipo: `/pro(fonda)/`
che trova tutto il contenuto della parola _profonda_ ma poi ne estrae anche la parte raggruppata _fonda_.

I raggruppamenti possono essere anche annidati. L'ordinamento dei raggruppamenti segue una semplice regola: il primo gruppo è quello che ha la parentesi più a sinistra, il secondo è quello appena a destra e così via.

Infine, in alcuni contesti non si vuole selezionare il contenuto di un raggruppamento; per questo motivo esiste il metacarattere **(? )** che cerca ma non raggruppa il cotenuto, come per esempio in:
```
"abcabcabcabcdfg"
/(?:abc){3}.*/
```
In questo caso, infatti, è fondamentale raggruppare "`abc`" per poterlo cercare per tre volta ma, al tempo stesso, non è interessante il contenuto del submatch quanto piuttosto il match completo "`abcabcabcdfg`" (da notare che il primo gruppo "`abc`" è stato scartato).

## PROBLEMA

Trovare i raggruppamenti della seguente espressione regolare `/(ab(cd|ef)((gh)|ij))/` sulle stringhe:
```
"abcdefghij"
"abcdghij"
"abefij"
```

Per ogni stinga utilizzare un comando _console.log()_ come nell'esempio seguente:
```
"ciao mondo"
/(ciao) (mondo)(!?)/
console.log('ciao mondo', 'ciao', 'mondo', '___')
```
NB: il primo risultato è l'intera sottostringa trovata, senza considerare i gruppi

NNB: l'ultima stringa "`___`" indica che il gruppo "`(!?)`" non ha trovato alcun valore
