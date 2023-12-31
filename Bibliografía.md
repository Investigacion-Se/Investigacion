## Carpetas
---
Lista de todas las carpetas siendo investigadas, con todos los links que usan. Cualquier cosa ver el [[README|read me]].

```dataviewjs
function conseguir_nombre(carpeta) {
	const nombre = carpeta.rows[0].file.folder;

	let path = carpeta.rows[0].file.path;
	for (let pagina of carpeta.rows.file) {
		if (pagina.name == "Índice") {
			path = pagina.path;
		}
	}
	
	return `${nombre} [[${path}|?]]`;
}

function procesar_links(links) {
	return links.join("\n");
}

function mostrar_bibliografia(carpeta) {
	dv.table(["Archivo", "Links"], carpeta.rows.file.map(archivo => {
		if (!archivo.frontmatter.biblio) return [];
		const links = procesar_links(archivo.frontmatter.biblio);
		return [archivo.name, links];
	}));
	dv.el("br", "");
}

// Conseguimos todos los archivos que no estan en el root, porque los que estan en el root tienen una carpeta
const paginas = dv.pages().where(pagina => {
	if (!pagina.file.folder) return false;
	return pagina.file.folder != "_templates";
});

for (let carpeta of paginas.groupBy(pagina => pagina.file.folder)) {

	let tiene_links = carpeta.rows.file.frontmatter.some(archivo => {
		if (!archivo.biblio) return false;
		return archivo.biblio.length > 0;
	});

	if (!tiene_links) continue;

	let indice = undefined;
	
	let links = [];
	for (let pagina of carpeta.rows.file) {
		if (pagina.name == "Índice") {
			indice = pagina.path;
		}

		if (!pagina.frontmatter.biblio) continue;

		for (let link of pagina.frontmatter.biblio) {
			links.push(link);
		}
	}	
	if (links.length == 0) continue;

	dv.header(5, conseguir_nombre(carpeta));
	dv.el("hr", "");

	mostrar_bibliografia(carpeta);
}
```
