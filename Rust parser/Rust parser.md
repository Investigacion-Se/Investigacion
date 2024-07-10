---
dia: 2024-07-08
tags: 
 - Índice
tema: Rust parser
nivel: 0
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
Intención de ver como poder parsear el código de rust para usarlo en las macros

Basándonos en el libro
* [The Little Book of Rust Macros](https://danielkeep.github.io/tlborm/book/index.html)


#### Archivos
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarArchivos", { indice: dv.current() });
```


### Bibliografía
---
```dataviewjs
await dv.view('_dataviewScripts/biblioIndice', { indice: dv.current() });
```