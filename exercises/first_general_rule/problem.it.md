Alla base del funzionamento delle espressioni regolari, c'è un engine che regola i meccanismi di risoluzione del pattern (l'espressione regolare).
I principali motori di engine per espressioni regolari sono la DFA (Deterministic Finite Automata) e la NFA (NonDeterministic Finite Automata) le cui soluzioni sullo stesso patern possono variare.
Ci sono delle regole però, che sono incontrovertibili, qualisasi sia il pattern utilizzato.

Ecco la prima:
**Il match che inizia per primo, vince**

L'engine inizia la ricerca del pattern dalla prima lettera della stringa da analizzare.
Qualora il pattern sia compatibile con la lettera, l'engine "segna" la lettera e prosegue analizzando la seconda lettera; viceversa, non "segna" la lettera e passa ad analizzare la stringa dalla seconda lettera.
Per esempio, data la stringa:

"`Controlla se c'è l'insaccato nella sacca`"

la ricerca del pattern `/sacca/` darà come risultato:

"`Controlla se c'è l'in`**sacca**`to nella sacca`"

A differenza di quanto si possa immaginare, l'engine trova il primo pattern di "`sacca`" all'interno della parola "`insaccato`".
Non ha alcuna necessità di proseguire la ricerca perchè ha già trovato quando richiesto dal pattern.

## PROBLEMA
Dato il testo: "`Uno scontro tra titani ha conseguenze disastrose.`", indicare in _console.log_ il match dell'espressione: 
```
   /disastro|segue|tra|titani/
```