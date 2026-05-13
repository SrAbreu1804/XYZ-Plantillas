fetch('header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header-placeholder').innerHTML = html;

        // Marcar el enlace activo según la página actual
        const currentPage = window.location.pathname.split('/').pop();
        const links = document.querySelectorAll('.navbar__link');

        links.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('navbar__link--active');
            }
        });
    });