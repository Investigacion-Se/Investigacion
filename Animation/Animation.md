---
dia: 2024-07-08
tags: 
 - Índice
tema: Animation
nivel: 0
---
```dataviewjs
await dv.view("_dataviewScripts/mostrarSuperTema", { superTema: dv.current().superTema });
await dv.view("_dataviewScripts/mostrarSubTemas", { subTemas: dv.current().subTemas });
```
### ¿Qué se va a investigar?
---
Vamos a ver como producir las mejores animaciones, con el menor esfuerzo posible y la mayor expresividad posible. Esto nos va a llevar a aprender sobre muchas cosas como inverse kinematic, rigging y otras cosas


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