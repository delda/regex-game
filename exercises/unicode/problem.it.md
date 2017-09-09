JavaScript utilizza il set di carateri Unicode. A differenza della codifica ASCII utile solo per la lingua inglese, la codifica Unicode rappresenta tutte le lingue parlate nel mondo. 
Lo Unicode è una sorta di database a cui ad ogni simbolo è associato un codice. Per esempio:

```
A  U+00041
a  U+00061
©  U+000A9
💩  U+1F4A9
💙  U+1F400
```
Per poter cercare un carattere Unicode possiamo scegliere tra due strade:
1. utilizzare la sequenza di escaping **\u** seguita del codice esadecimale del carattere.
2. aggiungere il modificatore **u** 
```
/Io.JavaScript/.test('Io💙 JavaScript')
false
/Io.JavaScript/u.test('Io💙 JavaScript')
true
```

## PROBLEMA
Scrivere l'espressione regolare che trovi i caratteri unicode nelle seguenti frasi.
```
JavaScript è proprio una 💩!
Io invece 💙  JavaScript... 
Il 🔆  e la 🌜
```