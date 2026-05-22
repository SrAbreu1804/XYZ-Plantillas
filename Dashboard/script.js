const plantillas = [
    { titulo: "Hotel",         categoria: "Turismo",      archivo: "../dashboard/templates/Hotel/index.html",         preview: "https://via.placeholder.com/600x360/0f1420/63d3ff?text=Hotel" },
    { titulo: "Inmobiliaria",  categoria: "Negocios",     archivo: "../dashboard/templates/Inmobiliaria/index.html",   preview: "https://via.placeholder.com/600x360/0f1420/7b6cff?text=Inmobiliaria" },
    { titulo: "Tienda Online", categoria: "E-commerce",   archivo: "../dashboard/templates/Tienda Online/Index.html",  preview: "https://via.placeholder.com/600x360/0f1420/ff6b6b?text=Tienda+Online" },
    { titulo: "Fisioterapia",  categoria: "Salud",        archivo: "../dashboard/templates/Fisio/index.html",          preview: "https://via.placeholder.com/600x360/0f1420/63d3ff?text=Fisioterapia" },
    { titulo: "Restaurante",   categoria: "Gastronomía",  archivo: "../dashboard/templates/Restaurante/inicio.html",  preview: "https://via.placeholder.com/600x360/0f1420/7b6cff?text=Restaurante" },
    { titulo: "Gimnasio",      categoria: "Deportes",     archivo: "../dashboard/templates/Gimnasio/index.html",       preview: "https://via.placeholder.com/600x360/0f1420/ff6b6b?text=Gimnasio" },
    { titulo: "Veterinaria",   categoria: "Mascotas",     archivo: "../dashboard/templates/Veterinaria/index.html",    preview: "https://via.placeholder.com/600x360/0f1420/63d3ff?text=Veterinaria" },
    { titulo: "Blog",          categoria: "Personal",     archivo: "../dashboard/templates/Blog Personal/index.html",  preview: "https://via.placeholder.com/600x360/0f1420/7b6cff?text=Blog" }
];

const buscador   = document.querySelector('#miBuscador');
const contenedor = document.querySelector('#galeria');

function renderizar(filtro = "") {
    contenedor.innerHTML = "";

    const filtradas = plantillas.filter(p =>
        p.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
        p.categoria.toLowerCase().includes(filtro.toLowerCase())
    );

    // Actualiza contador si existe
    const counter = document.querySelector('.resultado-count');
    if (counter) {
        counter.textContent = filtradas.length === plantillas.length
            ? `${plantillas.length} plantillas disponibles`
            : `${filtradas.length} de ${plantillas.length} resultados`;
    }

    if (filtradas.length === 0) {
        contenedor.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">⌕</div>
                <p>Sin resultados para "${filtro}"</p>
                <small>Prueba con otro nombre o categoría</small>
            </div>`;
        return;
    }

    filtradas.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${p.preview}" alt="Preview de ${p.titulo}" loading="lazy">
            <span class="card-category">${p.categoria}</span>
            <div class="card-content">
                <h3>${p.titulo}</h3>
                <div class="card-ruta">${p.archivo}</div>
                <a href="${p.archivo}" target="_blank" class="btn-abrir">Abrir Proyecto</a>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

buscador.addEventListener('input', (e) => renderizar(e.target.value));
renderizar();
