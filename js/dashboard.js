const repoData = {
    // ESTA ES LA PANTALLA PRINCIPAL
    "root": [
        { name: "Salud", type: "folder", path: "salud" },
        { name: "Hotel", type: "folder", path: "hotel" },
        { name: "Inmobiliaria", type: "folder", path: "inmo" },
        { name: "Gimnasio", type: "folder", path: "gimnasio" }
    ],

    // TODO LO QUE TIENES EN SALUD (Ajustado a tu carpeta XYZ-Plantillas/Salud...)
    "salud": [
        { name: "Página Principal", type: "file", link: "XYZ-Plantillas/Salud/Clinica/Fisio/index.html" },
        { name: "Contacto", type: "file", link: "XYZ-Plantillas/Salud/Clinica/Fisio/contacto.html" },
        { name: "Sobre Nosotros", type: "file", link: "XYZ-Plantillas/Salud/Clinica/Fisio/nosotros.html" },
        { name: "Nuestros Servicios", type: "file", link: "XYZ-Plantillas/Salud/Clinica/Fisio/servicios.html" },
        { name: "Carpeta CSS", type: "folder", path: "salud_css" },
        { name: "Carpeta Imágenes", type: "folder", path: "salud_img" }
    ],

    // SUB-CARPETAS (Para entrar un nivel más)
    "salud_css": [
        { name: "Estilos Globales", type: "file", link: "XYZ-Plantillas/Salud/Clinica/Fisio/css/style.css" }
    ],
    "salud_img": [
        { name: "Logo Clínica", type: "file", link: "XYZ-Plantillas/Salud/Clinica/Fisio/img/logo.png" }
    ],

    //CARPETA DE GIMNASIO
    "gimnasio": [
        { name: "Home Gimnasio", type: "file", link: "XYZ-Plantillas/Giovani/plantillas/docs/plantilla-base/plantillas/Gimnasio/index.html" },
        { name: "Contacto", type: "file", link: "XYZ-Plantillas/Giovani/plantillas/docs/plantilla-base/plantillas/Gimnasio/contacto.html" },
        { name: "Carpeta CSS", type: "folder", path: "gimnasio_css" },
        { name: "Carpeta Imágenes", type: "folder", path: "gimnasio_img" }
    ],

    "gimnasio_css": [
        { name: "Estilos Gimnasio", type: "file", link: "XYZ-Plantillas/Giovani/plantillas/docs/plantilla-base/plantillas/Gimnasio/css/style.css" }
    ],
    "gimnasio_img": [
        { name: "Logo Gimnasio", type: "file", link: "XYZ-Plantillas/Giovani/plantillas/docs/plantilla-base/plantillas/Gimnasio/img/logo.png" }
    ]


};

// LA LÓGICA PARA RENDERIZAR (No hace falta tocarla)
function renderExplorer(folderKey) {
    const grid = document.getElementById('explorerGrid');
    if(!grid) return;
    grid.innerHTML = ''; 

    const items = repoData[folderKey] || [];

    items.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-3 file-item mb-4';
        col.setAttribute('data-name', item.name.toLowerCase());

        let icon = item.type === 'folder' ? 'bi-folder-fill text-warning' : 'bi-file-earmark-code text-primary';
        
        let action = item.type === 'folder' 
            ? `onclick="renderExplorer('${item.path}')"` 
            : `onclick="window.open('${item.link}', '_blank')"`;

        col.innerHTML = `
            <div class="card h-100 text-center p-3 border-0 shadow-sm" style="cursor:pointer" ${action}>
                <i class="bi ${icon} display-4"></i>
                <div class="mt-2 fw-bold">${item.name}</div>
            </div>
        `;
        grid.appendChild(col);
    });
}