"use client";

import { useEffect, useRef, useState } from 'react';

export default function Home() {
    const observerRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = document.querySelectorAll('.reveal');
        elements.forEach((el) => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                elements.forEach((el) => observerRef.current.unobserve(el));
            }
        };
    }, []);

    return (
        <div className="app-container">
            {/* Navigation */}
            <div className="navbar-wrapper">
                <nav className="navbar">
                    <div className="nav-brand">
                        <img src="/images/Logo.jpg" alt="Nature Pistachio Logo" className="nav-logo" />
                    </div>
                    <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Quiénes Somos</a></li>
                        <li><a href="#instalaciones" onClick={() => setIsMobileMenuOpen(false)}>Instalaciones</a></li>
                        <li><a href="#proceso" onClick={() => setIsMobileMenuOpen(false)}>Producción</a></li>
                        <li><a href="#noticias" onClick={() => setIsMobileMenuOpen(false)}>Noticias</a></li>
                        <li><a href="#domo" onClick={() => setIsMobileMenuOpen(false)}>Domo Pistachio</a></li>
                        <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a></li>
                    </ul>
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </nav>
            </div>

            {/* Hero Section */}
            <header className="hero">
                <div className="hero-bg animate-bg-zoom"></div>
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <span className="hero-subtitle fade-in-up">Nature Pistachio</span>
                    <h1 className="fade-in-up delay-1 font-serif">El corazón del pistacho en La Mancha</h1>
                    <p className="fade-in-up delay-2">Tradición agrícola, innovación tecnológica y cuidado exhaustivo en cada detalle. Desde el campo hasta sus manos.</p>

                    <div className="hero-btns fade-in-up delay-3 mt-md">
                        <a href="#about" className="btn-primary">Descubre nuestra historia</a>
                        <a href="#proceso" className="btn-secondary">Nuestro Proceso</a>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    <span>Descubrir</span>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className="section py-xl">
                <div className="container">
                    <div className="grid-2 align-center">
                        <div className="about-text reveal">
                            <span className="section-tag">Nuestras Raíces</span>
                            <h2 className="section-title">Nuestras Raíces</h2>
                            <p>Somos una cooperativa joven, ambiciosa y llena de ilusión, impulsada por un proyecto liderado por Solagro. Fundada en 2022 con 121 socios, hoy Nature Pistachio une a <strong>134 socios</strong> agricultores de Toledo, Cuenca y Ciudad Real.</p>
                            <p className="mt-md">Nuestra fachada en la calle María Pacheco es la puerta a un proyecto que une tradición y vanguardia. El esfuerzo diario de nuestras familias ha forjado unos cimientos sólidos, convirtiéndonos en un referente de unión cooperativa y desarrollo rural.</p>

                            <div className="stats-inline">
                                <div className="stat-item">
                                    <span>36</span>
                                    <small>Mujeres</small>
                                </div>
                                <div className="stat-item">
                                    <span>85</span>
                                    <small>Hombres</small>
                                </div>
                                <div className="stat-item">
                                    <span>10</span>
                                    <small>Empresas</small>
                                </div>
                            </div>

                            <p className="highlight-text">Sembramos historia, cosechamos futuro. La primera campaña en la planta ha sido en 2025, inaugurada por el Consejero de Agricultura. Ofertamos al mundo pistachos del corazón de La Mancha.</p>
                        </div>
                        <div className="reveal delay-1">
                            <div className="image-card" style={{ aspectRatio: 'auto', backgroundColor: 'transparent', boxShadow: 'none' }}>
                                <img src="/images/Placa.jpg" alt="Inauguración de la cooperativa" style={{ objectFit: 'contain', width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Production Stats Section */}
            <section id="production" className="section bg-dark py-xl">
                <div className="container center-text">
                    <span className="section-tag reveal">Impacto y Capacidad</span>
                    <h2 className="section-title reveal delay-1">Magnitud y Excelencia</h2>
                    <p className="subtitle reveal delay-2">Combinamos tradición y maquinaria de última generación en nuestro procesado para ofrecer un pistacho ecológico consistente, sabroso y delicado.</p>

                    <div className="impact-stats">
                        <div className="impact-stat-card glass-dark reveal delay-1">
                            <h3>605.500</h3>
                            <p>Kg de Cupo Seco</p>
                        </div>
                        <div className="impact-stat-card glass-dark reveal delay-2">
                            <h3>28</h3>
                            <p>Localidades Productoras</p>
                        </div>
                        <div className="impact-stat-card glass-dark reveal delay-3">
                            <h3>1.000</h3>
                            <p>Hectáreas de Cultivo</p>
                        </div>
                        <div className="impact-stat-card glass-dark reveal delay-4">
                            <h3>42%</h3>
                            <p>Producción Ecológica</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campos Section */}
            <section id="campos" className="section py-xl bg-light">
                <div className="container">
                    <div className="grid-2 align-center">
                        <div className="reveal">
                            <div className="image-card img-landscape">
                                <img src="/images/Pistachos.jpg" alt="Pistachos" />
                            </div>
                        </div>
                        <div className="about-text reveal delay-1">
                            <span className="section-tag">El Origen</span>
                            <h2 className="section-title">El Valor del Fruto</h2>
                            <p className="subtitle" style={{ marginLeft: 0, textAlign: 'left' }}>El pistacho lo dice todo. Es pequeño, pero encierra todo nuestro trabajo, toda una tierra y el esfuerzo compartido de quienes creen en él.</p>
                            <p>En Nature Pistachio fomentamos la unión de La Mancha. Cuidamos cada rama con dedicación porque cada paso que damos nos recuerda que hemos iniciado una nueva etapa para nuestra cooperativa.</p>

                            <ul className="icon-list mt-lg">
                                <li>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Variedad Kerman
                                </li>
                                <li>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Variedad Sirora
                                </li>
                                <li>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Variedad Larnaka & Lost Hill
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instalaciones Section */}
            <section id="instalaciones" className="section py-xl">
                <div className="container">
                    <div className="grid-2 align-center" style={{ direction: 'rtl' }}>
                        <div className="reveal delay-1" style={{ direction: 'ltr' }}>
                            <div className="image-card img-landscape" style={{ aspectRatio: '4/3' }}>
                                <img src="/images/Instalaciones.jpg" alt="Nuestras instalaciones" />
                            </div>
                        </div>
                        <div className="about-text reveal" style={{ direction: 'ltr' }}>
                            <span className="section-tag">Nuestra Casa</span>
                            <h2 className="section-title">Nuestras Instalaciones</h2>
                            <p className="subtitle" style={{ marginLeft: 0, textAlign: 'left' }}>Un espacio donde la tecnología abraza a la naturaleza.</p>
                            <p>Ubicados en Corral de Almaguer (Toledo), nuestras instalaciones son un punto de encuentro para más de un centenar de agricultores de la región. El espacio está optimizado para recibir la cosecha minimizando los tiempos de espera y garantizando que el pistacho llegue fresco a nuestras tolvas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proceso Section */}
            <section id="proceso" className="section py-xl bg-light">
                <div className="container center-text">
                    <span className="section-tag reveal">Trazabilidad y Calidad</span>
                    <h2 className="section-title reveal delay-1">Nuestro Procesado</h2>
                    <p className="subtitle reveal delay-2">Innovación, tecnología y muchísimo cuidado en cada detalle de la planta.</p>
                </div>

                <div className="container mt-lg">
                    <div className="grid-2 align-center">
                        <div className="about-text reveal">
                            <p>El procesado es el alma que hace único a nuestro pistacho. Las tolvas reciben el fruto que, a través de maquinaria de última generación, es limpiado, secado, clasificado y almacenado bajo los más estrictos estándares del mercado europeo.</p>
                            <p className="mt-md">Combinamos la tradición heredada por nuestros 134 socios con técnicas de calibración óptica y secado lento. Esto garantiza que las cualidades organolépticas permanezcan intactas.</p>

                            <ul className="icon-list mt-md">
                                <li>
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg>
                                    <span>Clasificación Óptica de Alta Precisión</span>
                                </li>
                                <li>
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg>
                                    <span>Secado Controlado al Grado Exacto</span>
                                </li>
                                <li>
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg>
                                    <span>Separación Mecánica Avanzada</span>
                                </li>
                            </ul>
                        </div>
                        <div className="reveal delay-1">
                            <div className="image-card img-landscape" style={{ aspectRatio: '16/10' }}>
                                <video autoPlay loop muted playsInline>
                                    <source src="/images/Video_Procesos.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>

                    <div className="process-timeline reveal mt-xl">
                        <div className="center-text mb-lg">
                            <h3 className="section-title" style={{ fontSize: '2rem' }}>Proceso de Producción</h3>
                            <p className="subtitle mx-auto">Nuestro riguroso proceso asegura un producto de calidad.</p>
                        </div>

                        <div className="horizontal-flow-wrapper">
                            <div className="horizontal-flowchart">
                                {[
                                    { step: '1', title: 'Recepción', desc: 'Llegada a las tolvas y control inicial.' },
                                    { step: '2', title: 'Limpieza', desc: 'Retirada de hojas y ramas mediante despalillador.' },
                                    { step: '3', title: 'Pelado I', desc: 'Primera pasada para retirar la piel externa.' },
                                    { step: '4', title: 'Pelado II', desc: 'Repeladora con agua para la piel residual.' },
                                    { step: '5', title: 'Pesaje', desc: 'Control volumétrico exacto del pelado húmedo.' },
                                    { step: '6', title: 'Flotación', desc: 'Separación de frutos vacíos o defectuosos.' },
                                    { step: '7', title: 'Presecado', desc: 'Golpe de calor intenso para abrir la cáscara.' },
                                    { step: '8', title: 'Separación', desc: 'Fricción para eliminar el pistacho sin pelar.' },
                                    { step: '9', title: 'Almacén', desc: 'Reposo en silo pulmón para su estabilización.' },
                                    { step: '10', title: 'Secado Final', desc: 'Paso por secaderos estáticos y envasado.' }
                                ].map((item, i) => (
                                    <div className="h-flow-step" key={item.step}>
                                        <div className="h-flow-icon">{item.step}</div>
                                        <div className="h-flow-content">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="machinery-info mt-lg">
                            <h4>Nuestra Maquinaria de Fase 1</h4>
                            <p>Contamos con tolvas de descarga, despalilladora, peladora, repeladora, tanque de flotación, presecadero y separador de peludos.</p>
                            <p className="mt-md" style={{ fontSize: '0.95rem' }}>Máquinas principales de <strong>Renatus</strong> y <strong>Jar</strong>. Despedregadora de <strong>IS&PA</strong>, partidora de <strong>Renatus</strong>, óptima de grano de <strong>CIMBRIA</strong> y calibradora óptica de <strong>UNITEC</strong>.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Domo Pistachio Section */}
            <section id="domo" className="section py-xl bg-dark">
                <div className="container center-text reveal">
                    <span className="section-tag">Agrupación Comercial</span>
                    <h2 className="section-title">Nuestra Comercializadora: Domo Pistachio</h2>
                    <p className="subtitle mx-auto">
                        La comercializadora con mayor producción de pistacho de Castilla La Mancha.
                    </p>
                    <a href="https://domopistachio.com/" target="_blank" rel="noopener noreferrer" className="btn-primary mt-md">
                        Visita domopistachio.com
                    </a>
                </div>
            </section>

            {/* Noticias Section */}
            <section id="noticias" className="section py-xl">
                <div className="container">
                    <div className="center-text reveal">
                        <span className="section-tag">Actualidad</span>
                        <h2 className="section-title">Actualidad y Noticias</h2>
                        <p className="subtitle mx-auto">Descubre las últimas novedades y noticias destacadas de Nature Pistachio.</p>
                    </div>
                    <div className="grid-3 mt-lg">
                        {[
                            {
                                source: 'PistachoPro',
                                title: 'Inauguración de la planta de procesado',
                                desc: 'Nature Pistachio inaugura en Corral de Almaguer su planta de hasta 1.500 toneladas.',
                                link: 'https://pistachopro.es/la-cooperativa-nature-pistachio-inaugura-en-corral-de-almaguer-su-planta-de-procesado-de-pistacho-con-capacidad-de-hasta-1-500-toneladas/'
                            },
                            {
                                source: 'Quijote Digital',
                                title: 'Instalaciones e Inversión',
                                desc: 'Se inauguran instalaciones de última generación con una inversión de 4 millones de euros.',
                                link: 'https://www.quijotedigital.es/articulo/corral-de-almaguer/nature-pistachio-inaugurara-jueves-corral-almaguer-instalaciones-inversion-4-millones-euros/20250722125244132250.html'
                            },
                            {
                                source: 'Solagro',
                                title: 'Proyecto Innovador',
                                desc: 'Solagro liderará el proyecto de ingeniería para la cooperativa de Corral de Almaguer.',
                                link: 'https://www.solagro.es/solagro-liderara-el-proyecto-innovador-para-la-cooperativa-nature-pistachio-de-corral-de-almaguer/'
                            },
                            {
                                source: 'Avanis',
                                title: 'Crecimiento en Castilla-La Mancha',
                                desc: 'Las plantas de procesado de pistacho siguen marcando hitos de crecimiento en nuestra región.',
                                link: 'http://avanis.es/es/b/las-plantas-de-procesado-de-pistacho-siguen-creciendo-en-castilla-la-mancha'
                            },
                            {
                                source: 'PistachoPro',
                                title: 'Nueva Cooperativa de Pistachos',
                                desc: 'Nace una nueva cooperativa de pistachos impulsada por más de un centenar de agricultores.',
                                link: 'https://pistachopro.es/nueva-cooperativa-pistachos-corral-almaguer/'
                            },
                            {
                                source: 'Facebook',
                                title: 'Video Reportaje Especial CMM',
                                desc: 'Conoce más a fondo sobre nuestras instalaciones en este gran reportaje televisivo.',
                                link: 'https://www.facebook.com/watch/?v=1316384230146106'
                            }
                        ].map((news, i) => (
                            <a href={news.link} target="_blank" rel="noopener noreferrer" className={`news-card reveal delay-${(i % 3) + 1}`} key={i}>
                                <div className="news-content">
                                    <span className="news-source">{news.source}</span>
                                    <h4>{news.title}</h4>
                                    <p>{news.desc}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer id="contact" className="footer">
                <div className="container grid-3 reveal">
                    <div>
                        <h3 className="footer-title">Nature Pistachio</h3>
                        <p>C/ María Pacheco, 29</p>
                        <p>Corral de Almaguer (Toledo)</p>
                        <p className="mt-md">Tel: +34 614 18 96 78</p>
                        <p>Email: <a href="mailto:naturepistachio@gmail.com" style={{ textDecoration: 'underline' }}>naturepistachio@gmail.com</a></p>
                    </div>
                    <div className="reveal delay-1">
                        <h3 className="footer-title">Domo Pistachio (Sede)</h3>
                        <p>Paseo de John Lennon, 12 - 2º ofi. 3</p>
                        <p>28906 Getafe - MADRID</p>
                        <p className="mt-md">Tel: +34 653 604 884</p>
                        <p>Email: <a href="mailto:info@domopistachio.com" style={{ textDecoration: 'underline' }}>info@domopistachio.com</a></p>
                    </div>
                    <div className="reveal delay-2">
                        <h3 className="footer-title">Conecta con nosotros</h3>
                        <p>Damos el salto para compartir contigo el trabajo, el compromiso y el esfuerzo que hay detrás de nuestro fruto.</p>
                        <div className="flex flex-col mt-md gap-md" style={{ gap: '1rem' }}>
                            <a href="https://www.instagram.com/naturepistachio/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                <span>@naturepistachio</span>
                            </a>
                            <a href="https://www.facebook.com/people/NaturePistachio-Cooperativa/pfbid02L2R9LdR7m72rc2jqz1gz8GY16qv4V2LUP6G8a6PGxp9L8x3pMqNXpphNxEYTWSVUl/?rdid=6YfVg2l1O23lBvSM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17fkKqyAJ3%2F" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                                </svg>
                                <span>NaturePistachio Cooperativa</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© Copyright {new Date().getFullYear()} Nature Pistachio & Domo Pistachio. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
