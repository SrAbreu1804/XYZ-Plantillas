document.addEventListener('DOMContentLoaded', () => {

    // ─── REFERENCIAS ─────────────────────────────────────────
    const menuLateral = document.getElementById('menu-lateral');
    const overlay     = document.getElementById('menu-overlay');
    const btnAbrir    = document.querySelector('.btn-abrir-menu');
    const btnCerrar   = document.querySelector('.btn-cerrar-menu');

    // ─── ABRIR / CERRAR MENÚ ─────────────────────────────────
    function abrirMenu() {
        menuLateral.classList.add('abierto');
        overlay.classList.add('activo');
        document.body.style.overflow = 'hidden';
    }

    function cerrarMenu() {
        menuLateral.classList.remove('abierto');
        overlay.classList.remove('activo');
        document.body.style.overflow = '';
    }

    btnAbrir.addEventListener('click', abrirMenu);
    btnCerrar.addEventListener('click', cerrarMenu);
    overlay.addEventListener('click', cerrarMenu);

    // Cerrar con Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') cerrarMenu();
    });

    // Cerrar al hacer clic en enlaces de sección (no cierres submenús)
    document.querySelectorAll('.sidenav-link[data-seccion]').forEach(enlace => {
        enlace.addEventListener('click', cerrarMenu);
    });


    // ─── SUBMENÚS DESPLEGABLES ───────────────────────────────
    document.querySelectorAll('.sidenav-btn-submenu').forEach(btn => {
        btn.addEventListener('click', () => {
            const li      = btn.closest('.tiene-submenu');
            const submenu = li.querySelector('.submenu');
            const abierto = submenu.classList.contains('abierto');

            // Cierra todos los submenús abiertos primero
            document.querySelectorAll('.submenu.abierto').forEach(s => {
                s.classList.remove('abierto');
                s.closest('.tiene-submenu')
                 .querySelector('.sidenav-btn-submenu')
                 .setAttribute('aria-expanded', 'false');
            });

            // Abre el clicado si estaba cerrado
            if (!abierto) {
                submenu.classList.add('abierto');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });


    // ─── ACTIVE TRACKING (IntersectionObserver) ──────────────
    // Resalta en el sidenav la sección visible en pantalla
    const secciones   = document.querySelectorAll('.seccion-contenido[id]');
    const navLinks    = document.querySelectorAll('.sidenav-link[data-seccion]');

    const marcarActivo = (id) => {
        navLinks.forEach(link => {
            link.classList.toggle('activo', link.dataset.seccion === id);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                marcarActivo(entry.target.id);
            }
        });
    }, {
        rootMargin: '-30% 0px -60% 0px',  // Activa cuando la sección está ~1/3 desde arriba
        threshold: 0
    });

    secciones.forEach(s => observer.observe(s));


    // ─── SLIDER HORIZONTAL DE HABILIDADES ───────────────────
    const slider  = document.querySelector('.slider');
    const btnPrev = document.querySelector('.flecha-prev');
    const btnNext = document.querySelector('.flecha-next');

    btnNext.addEventListener('click', () => {
        slider.scrollBy({ left: 210, behavior: 'smooth' });
    });

    btnPrev.addEventListener('click', () => {
        slider.scrollBy({ left: -210, behavior: 'smooth' });
    });

});
