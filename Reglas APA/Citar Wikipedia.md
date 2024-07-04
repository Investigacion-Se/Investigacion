---
dia: 2024-07-03
biblio:
  - https://normas-apa.org/referencias/citar-wikipedia/
etapa: terminado
tema: "[[Reglas APA/Investigar reglas APA.md|Reglas APA]]"
---
### Definición
---
Uno de los grandes problemas de citar Wikipedia es la alta frecuencia de actualización de sus artículos. Wikipedia guarda copias de las versiones de cada entrada. Por lo tanto, idealmente, debemos intentar conseguir el enlace permanente de la versión a la cuál estamos accediendo, así ofrecemos a los lectores la versión que consultaremos al realizar la citación

* Cita narrativa
	* “Olimpíada de ajedrez de 1939” (2019)
* Cita en paréntesis
	* (“Olimpíada de ajedrez de 1939,” 2019)
* Referencia
	* Olimpíada de ajedrez de 1939. (23 de septiembre de 2019). En _Wikipedia_. https://es.wikipedia.org/w/index.php?title=Olimp%C3%ADada_de_ajedrez_de_1939&oldid=119643209



### Archivos
---
```dataviewjs 
const paginaActual = dv.current();
let archivos = dv.pages(`"${paginaActual.file.folder}" and -#Índice`)
	.where(pagina => pagina.file.path != paginaActual.file.path);

archivos = (archivos.length > 0) 
	? archivos.map(archivo => {
			let nombre = archivo.file.name;
			let path = archivo.file.path;
			return `[[${path}|${nombre}]]`;
		}) 
	: ["No hay más archivos"];

dv.list(archivos);	
```