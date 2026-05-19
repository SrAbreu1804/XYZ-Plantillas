const myProjects = [
    //Añadir proyectos aquí
    { 
        name: "Clínica Fisioterapia", 
        icon: "bi bi-heart-pulse", 
        color: "text-danger",
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/Salud/Clinica/Fisio/index.html" 
    },

    { 
        name: "Gimnasio", 
        icon: "bi bi-lightning-charge", 
        color: "text-success",
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/Gimnasio/index.html" 
    },

    { 
        name: "Hotel", 
        icon: "bi bi-building-check", 
        color: "text-success",
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/Hotel/Rural/index.html" 
    },

    { 
        name: "Colegio", 
        icon: "bi bi-mortarboard", 
        color: "text-success",
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/Colegio/index.html" 
    },

    { 
        name: "Restaurante", 
        icon: "bi bi-cup-hot", 
        color: "text-success",
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/Restaurante/index.html" 
    },

    {
        name: "Construcción",
        icon: "bi bi-cone-striped",
        color: "text-success",
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/Construccion/index.html"
    },

    {
        name: "Veterinaria",
        icon: "bi bi-heart-pulse",
        color: "text-success",
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/Salud/Veteninaria/index.html"
    },

    {
        name: "Peluquería",
        icon: "bi bi-scissors",
        color: "text-success",
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/Estética/Peluquería/index.html"
    }
];  

function loadDashboard() {
    const grid = document.getElementById('explorerGrid');
    if(!grid) return;
    grid.innerHTML = ''; 

    myProjects.forEach(project => {
        const col = document.createElement('div');
        col.className = 'col-md-3 mb-4';

        col.innerHTML = `
            <div class="card h-100 text-center p-4 border-0 shadow-sm" 
                 style="cursor:pointer; transition: 0.3s;" 
                 onclick="window.open('${project.link}', '_blank')"
                 onmouseover="this.style.transform='scale(1.05)'"
                 onmouseout="this.style.transform='scale(1)'">
                <i class="bi ${project.icon} ${project.color} display-3"></i>
                <div class="mt-3 fw-bold h5">${project.name}</div>
                <small class="text-muted">Abrir sitio web</small>
            </div>
        `;
        grid.appendChild(col);
    });
}
// Función para filtrar los proyectos
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const text = e.target.value.toLowerCase();
        const filteredProjects = myProjects.filter(project => 
            project.name.toLowerCase().includes(text)
        );
        
        renderFilteredProjects(filteredProjects);
    });
}

//renderizar solo los resultados filtrados
function renderFilteredProjects(projectsList) {
    const grid = document.getElementById('explorerGrid');
    if(!grid) return;
    grid.innerHTML = ''; 

    projectsList.forEach(project => {
        const col = document.createElement('div');
        col.className = 'col-md-3 mb-4';
        col.innerHTML = `
            <div class="card h-100 text-center p-4 border-0 shadow-sm" 
                 style="cursor:pointer; transition: 0.3s;" 
                 onclick="window.open('${project.link}', '_blank')"
                 onmouseover="this.style.transform='scale(1.05)'"
                 onmouseout="this.style.transform='scale(1)'">
                <i class="bi ${project.icon} ${project.color} display-3"></i>
                <div class="mt-3 fw-bold h5">${project.name}</div>
                <small class="text-muted">Abrir sitio web</small>
            </div>
        `;
        grid.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadDashboard(); // Carga todos los proyectos al inicio
    setupSearch();   // Activa la escucha del buscador
});

// Cargar al iniciar
document.addEventListener('DOMContentLoaded', loadDashboard);