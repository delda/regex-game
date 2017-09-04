Un _quantificatore_ è un metacarattere che semplifica la scrittura delle espressioni regolari perchè permette di indicare la _quantità_ di caratteri da cercare.

I principali quantificatori sono:
* **?** l'espressione a cui si riferisce può essere presente _nessuna_ volta o _una_ volta
* **.** l'espressione a cui si riferisce può essere presente da _una_ volta ad _infinite_ volte
* **\*** l'espressione a cui si riferisce può essere presente da _zero_ volte ad _infinite_ volte
* **{n,m}** l'espressione a cui si riferisce può essere presenta da _n_ volte ad _m_ volte

Generalmente, i quantificatori sono _greedy_ ovvero tendono a cercare la sottostringa più lunga che soddifsa l'espressione regolare.

## PROBLEMA
Scrivi l'output delle seguenti espressioni regolari sulla parola `Pinturicchio`:
```
/(.+)(h|i)(.*)/
/(.+)(h|i|o)(.*)/
```

Per esempio, se dovessi scrivere la soluzione dell'espressione regolare `/(s.*i)(.*)e/` sul testo `Espressione` dovresti scrivere:
```
console.log('spressi', 'on')
```