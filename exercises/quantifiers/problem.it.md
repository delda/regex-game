Un _quantificatore_ è un metacarattere che semplifica la scrittura delle espressioni regolari perchè permette di indicare la _quantità_ di caratteri da cercare.

I principali quantificatori sono:
* **?** l'espressione a cui si riferisce può essere presente _nessuna_ volta o _una_ volta
* **.** l'espressione a cui si riferisce può essere presente da _una_ volta ad _infinite_ volte
* **\*** l'espressione a cui si riferisce può essere presente da _zero_ volte ad _infinite_ volte
* **{n,m}** l'espressione a cui si riferisce può essere presente da _n_ volte ad _m_ volte

Generalmente, i quantificatori sono _greedy_ ovvero tendono a cercare la sottostringa più lunga che soddisfi l'espressione regolare.

## PROBLEMA
Scrivi l'output delle seguenti espressioni regolari sulla parola "`Pinturicchio`":
```
/(.+)(h|i)(.*)/
/(.+)(h|i|o)(.*)/
```

Per ogni espressione regolare utilizzare un comando _console.log()_ come nell'esempio seguente:
```
"ciao mondo"
/(ciao) (mondo)(!?)/
console.log('ciao mondo', 'ciao', 'mondo', '___')
```
NB: il primo risultato è l'intera sottostringa trovata, senza considerare i gruppi

NNB: l'ultima stringa `___` indica che il gruppo `(!?)` non ha trovato alcun valore
