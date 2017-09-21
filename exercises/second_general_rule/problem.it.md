Continuando il discorso del precedente problema, analizziamo la seconda (ed ultima) regola generale per le espression regolari:

**I quantificatori standard sono _greedy_**

Questa regola è stata in parte, già analizzata quando abbiamo introdotto i _quantificatori_.
In quella circostanza, abbiamo evidenziato che l'engine tenta di trovare la più ampia sottostringa che verifichi il pattern.

Se cerco un numero con la seguente espressione regolare `/.*(\d+)/` nella stringa "`Ho 37 anni`", otterrò come risultato "`7`" perchè la prima parte **.\***
 "mangia" tutto il testo possibile a disposizione, lasciando alla seconda parte **(\d+)** il minimo indispensabile per poter validare il risultato.   

## PROBLEMA
Scrivere la soluzione alle seguenti tre espressioni regolari sul testo:

"`Sono stati 56388480 i residenti in Italia nel 1980.`"

```
    /.*(\d+)/
    /.*(\d*)/
    /(\d+)(?!.*\d)/
```
