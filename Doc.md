# Definitions

## Object.fromEntries() 
Toma una lista de pares clave-valor y la convierte en un nuevo objeto.
# Explicacion linea 85 de ./assets/main.js

1. HTML: <input name="password" ...>

2. FormData: Crea una entrada llamada "password".

3. Object.fromEntries: Crea un objeto { password: "loqueescribióelusuario" }.

4. Tu código: const { password } = ... busca exactamente la palabra "password".

## .setItem(key, value)
- key -> nombre de la "caja" donde guardaremos la información.
- value -> Lo que queremos meter dentro de la caja.

## localStorage
Solo guarda Strings, no sabe de objetos JS { }