//  callback: (file: TAbstractFile, oldPath: string)
async function onRename(file, oldPath) {
    console.log(file);
    console.log(oldPath);

    const dv = app.plugins.plugins.dataview.api;
    const cambiaNombre = file.name == oldPath.split("/").pop();
    const esCarpeta = esCarpeta(file);

    if (esCarpeta && cambiaNombre) {
        // Actualizar indice de esta carpeta
        let indices = dv.pages(`"${file.path}" and #Índice`)
            .filter(ind => ind.file.folder == file.path);

        if (indices.length == 1) {
            let tIndice = tp.file.find_tfile(indices[0].file.path);
            await app.vault.rename(tIndice, `${file.path}/${file.name}`);

        } else if (indices.length > 1) {
            const mensaje = "Existe más de un índice en esta carpeta";
            console.log(mensaje);
            new Notice(mensaje);
        }

    } else if (!esCarpeta && cambiaNombre) {
        // Si es indice, si se cambio el nombre, entonces cambiar el nombre de la carpeta
        let carpeta = file.path.replace(`/${file.name}`, "");
        let indices = dv.pages(`"${carpeta}" and #Índice`)
            .filter(ind => ind.file.folder == carpeta);

        let indice = indices.find(ind => ind.file.name == file.basename);

        if (indice.tags && indice.tags.includes("Índice")) {
            if (!file.parent || file.parent.isRoot()) {
                // Movio el indice al root
                await app.vault.rename(file, oldPath);
                
            } else if (indices.length == 1) {
                // Se cambia el nombre del indice, y es el unico que esta, en esta carpeta
                let nuevaCarpeta = carpeta.split("/");
                nuevaCarpeta.pop();
                nuevaCarpeta.push(file.basename);
                nuevaCarpeta = nuevaCarpeta.join("/");

                await app.vault.rename(file.parent, nuevaCarpeta);

            } else if (indices.length > 1) {
                // Se movio a una carpeta donde ya existe uno o varios indices (de alguna forma hay varios)
                await app.vault.rename(file, oldPath);

                const mensaje = (indices.length > 2) 
                    ? "Hay más indices de lo que debería en la carpeta que se movió"
                    : "Ya exite un indice en esa carpeta";
                
                console.log(mensaje);
                new Notice(mensaje);
            }
        }
    }
}

function esCarpeta(file) {
    return file.children;
}

module.exports = onRename;