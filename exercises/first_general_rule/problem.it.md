Alla base del funzionamento delle espressioni regolari, c'è un engine che regola i meccaniscmi di soluzione del pattern.
I principali motori di engine per espressioni regolari sono la DFA (Deterministic Finite Automata) e la NFA (NonDeterministic Finite Automata) le cui soluzioni allo stesso patern possono variare.
Ci sono delle regole, però, che sono incontrovertibili, qualisasi sia il pattern utilizzato.
Ecco la prima:
Il match che inizia per primo vince
Spiegazione veloce...

## PROBLEMA
Dato il testo: `Uno scontro tra titani ha conseguenze disastrose`, indicare in console.log il match dell'espressione: `disastro|segue|tra|titani`