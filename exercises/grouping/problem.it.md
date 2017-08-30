Il raggruppamento è un importante aspetto delle espressioni regolari perchè permette di restringere e/o catalogare il risultato di un'espressione regolare.

Il metacarattere di raggruppamento è la coppia di parentesi tonde: **( )**

Per esempio se volessi cercare il gruppo `fonda` nella stringa `profonda`, dovrei utilizzare un'espressione regolare del tipo: `/pro(fonda)/`
che matcha tutto il contenuto della parola _profonda_ ma poi ne estrae anche la parte raggruppata _fonda_.

I raggruppamenti possono essere anche annidati. L'ordinamento dei raggruppamenti segue una semplice regola: il primo gruppo è quello che la parentesi più a sinistra, il secondo è quello appena a destra e così via.

Infine, in alcuni contesti non si vuole selezionare il contenuto di un raggruppamento; per questo motivo esiste il metacarattere **(? )** che matcha ma non raggruppa il cotenuto. Come per esempio in:
```
"abcabcabcdfg"
/(?:abc){3}.*/
```
In questo caso, infatti, è fondamentale raggruppare `abc` per tre volta ma non è richiesto il submatch quanto piuttosto il match completo.

## PROBLEMA

Trovare i raggruppamenti della seguente espressione regolare sulle stringe date.
```
/(ab(cd|ef)((gh)|ij))/
abcdefghij
abcdghij
abefij
```
Per ogni stringa, utilizzare la consueta risposta come nell'esempio seguente:
```
"ciao mondo"
/(ciao) (mondo)(!?)/
console.log('ciao mondo', 'ciao', 'mondo', '___')
```
NB: l'ultima stringa `___` indica che il gruppo `(!?)` non ha trovato alcun valore
