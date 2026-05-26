const myProjects = [
    { 
        name: "Clínica Fisioterapia", 
        icon: "bi bi-heart-pulse", 
        color: "text-success",
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/Salud/Clinica/Fisio/index.html" 
    },
    { 
        name: "Gimnasio", 
        icon: "bi bi-lightning-charge", 
        color: "text-success",
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/Deporte/Gimnasio/index.html" 
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
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/Salud/Veterinaria/index.html"
    },
    {
        name: "Peluquería",
        icon: "bi bi-scissors",
        color: "text-success",
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/Estética/Peluquería/index.html"
    },
    {
        name: "Coach Deportivo",
        icon: "bi bi-lightning-charge",
        color: "text-success",
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/Deporte/Coach/index.html"
    },
    {
        name: "Eventos",
        icon: "bi bi-calendar-event",
        color: "text-success",
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/Eventos/index.html"
    },
    {   
        name: "Portfolio_Personal",
        icon: "bi bi-person-badge",
        color: "text-success",
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/Portfolio_personal/index.html"
    },
    {
        name: "ONG",
        icon: "bi bi-people",
        color: "text-success",
        link: "Giovani/plantillas/docs/plantilla-base/plantillas/ONG/index.html"
    },

];  

function renderProjects(projectsList) {
    const grid = document.getElementById('explorerGrid');
    if (!grid) return;
    grid.innerHTML = ''; 

    projectsList.forEach(project => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4'; 

        col.innerHTML = `
            <div class="card h-100 text-center p-4 border-0 shadow-sm dashboard-card" 
                 onclick="window.open('${project.link}', '_blank')">
                <i class="bi ${project.icon} ${project.color} display-3"></i>
                <div class="mt-3 fw-bold h5 card-title-text">${project.name}</div>
                <small class="text-muted text-link-hint">Abrir sitio web</small>
            </div>
        `;
        grid.appendChild(col);
    });
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const text = e.target.value.toLowerCase();
        const filteredProjects = myProjects.filter(project => 
            project.name.toLowerCase().includes(text)
        );
        renderProjects(filteredProjects);
    });
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    renderProjects(myProjects); 
    setupSearch();   
});