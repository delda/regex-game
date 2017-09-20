Come abbiamo visto nel precedente capitolo, i quantificatori cercano l'espressione più lunga possibile che possa corrispondere alla richiesta dell'espressione regolare.
Talvolta, tuttavia, si ha la necessità di cercare una porzione di testo piccola.
Per ovviare a questa mancanza, sono stati introdotti i _quantificatory lazy_ che trasformano un quantificatore _gready_ in _lazy_. Tali quantificatori sono riconoscibili dalla presenza del metacarattere **?** subito dopo un quantificatore universale.
Quindi avremo:
* **??**
* **.?**
* **\*?**
* **{n,m}?**

## PROBLEMA
Scrivi l'output delle seguenti espressioni regolari sulla parola "`Pinturicchio`":
```
/(.+?)(h|i)(.*?)/
/(.+?)(h|i|o)(.+?)/
```

Per ogni espressione regolare utilizzare un comando _console.log()_ come nell'esempio seguente:
```
"ciao mondo"
/(ciao) (mondo)(!?)/
console.log('ciao mondo', 'ciao', 'mondo', '___')
```
NB: l'ultima stringa `___` indica che il gruppo `(!?)` non ha trovato alcun valore
