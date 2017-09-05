Come abbiamo visto nel precedente capitolo, i quantificatori cercano l'espressione più lunga possibile che possa corrispondere alla richiesta dell'espressione regolare.
Talvolta, tuttavia, si ha la necessità di cercare una porzione di testo piccola.
Per ovviare a questa mancanza, sono stati introdotti i _quantificatory lazy_ che trasformano un quantificatore _gready_ in _lazy_. Tali quantificatori sono riconoscibili dalla presenza del metacarattere **?** subito dopo un quantificatore universale.
Qundi avremo:
* **??**
* **.?**
* **\*?**
* **{n,m}?**

## PROBLEMA
Scrivi l'output delle seguenti espressioni regolari sulla parola `Pinturicchio`:
```
/(.+?)(h|i)(.*?)/
/(.+?)(h|i|o)(.+?)/
```

Per esempio, se dovessi scrivere la soluzione dell'espressione regolare `/(s.*i)(.*)e/` sul testo `Espressione` dovresti scrivere:
```
console.log('spressi', 'on')
```