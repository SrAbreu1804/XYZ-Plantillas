const plantillas = [
    {
        titulo: "Hotel Luxury",
        categoria: "Turismo",
        // Salimos de Dashboard (..) y entramos en la ruta de Aitor
        archivo: "../Aitor/plantillas/Hotel/index.html", 
        preview: "https://via.placeholder.com/300x180?text=Hotel"
    },
    {
        titulo: "Inmobiliaria",
        categoria: "Negocios",
        archivo: "../Aitor/plantillas/Inmobiliaria/index.html",
        preview: "https://via.placeholder.com/300x180?text=Inmobiliaria"
    },
    {
        titulo: "Tienda Online",
        categoria: "E-commerce",
        archivo: "../Aitor/plantillas/Tienda Online/index.html",
        preview: "https://via.placeholder.com/300x180?text=Tienda"
    }
    
];

const buscador = document.querySelector('#miBuscador');
const contenedor = document.querySelector('#galeria');

function renderizar(filtro = "") {
    contenedor.innerHTML = "";
    
    const filtradas = plantillas.filter(p => 
        p.titulo.toLowerCase().includes(filtro.toLowerCase())
    );

    filtradas.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${p.preview}" alt="${p.titulo}">
            <div class="card-content">
                <h3>${p.titulo}</h3>
                <p style="font-size:11px; color:gray;">Ruta: ${p.archivo}</p>
                <a href="${p.archivo}" target="_blank" class="btn-abrir">Abrir Proyecto</a>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

buscador.addEventListener('input', (e) => renderizar(e.target.value));
renderizar();