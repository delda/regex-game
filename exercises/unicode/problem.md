Unicode is a standard for encoding and rapresentation of all the language of the world.
In unicode, for each symbol there is a code. For example:

```
   A   U+00041
   a   U+00061
   ©   U+000A9
   💩   U+1F4A9
   💙   U+1F400
```
In Javascript, if you want find a character, you can:
* use an escaping sequence **\u** followed by exadecimal character code
```
    /I \uD83D\uDC99 JavaScript/.test('I 💙  JavaScript')
    true
```
* add a **/u** modificator
```
    /I . JavaScript/.test('Io 💙  JavaScript')
    false
    /I . JavaScript/u.test('Io 💙  JavaScript')
    true
```

## PROBLEM
Write a regex to find the unicode characters in the following texts:
```
JavaScript is just a 💩 !
Instead, I 💙  JavaScript... 
The 🔆  and the 🌜
```