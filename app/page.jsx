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
                        // Optional: Unobserve if we only want to animate once
                        // observerRef.current.unobserve(entry.target);
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
            <nav className="navbar">
                <div className="logo">
                    <img src="/images/Logo.jpg" alt="Nature Pistachio Logo" style={{ height: '40px', borderRadius: '4px' }} className="nav-logo" />
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

            {/* Hero Section */}
            <header className="hero" style={{ backgroundImage: "linear-gradient(rgba(18, 38, 22, 0.7), rgba(18, 38, 22, 0.4)), url('/images/Hero.jpg')" }}>
                <div className="hero-content">
                    <h1 className="fade-in-up">El corazón del pistacho en La Mancha</h1>
                    <p className="fade-in-up delay-1">Tradición agrícola, innovación tecnológica y cuidado exhaustivo en cada detalle. Desde el campo hasta sus manos.</p>
                    <a href="#about" className="btn-primary fade-in-up delay-2">Descubre nuestra historia</a>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className="section py-lg">
                <div className="container">
                    <div className="grid-2 align-center">
                        <div className="about-text reveal fade-right">
                            <h2 className="section-title">Nuestras Raíces</h2>
                            <p>Somos una cooperativa joven, ambiciosa y llena de ilusión, impulsada por un proyecto liderado por Solagro. Fundada en 2022 con 121 socios, hoy Nature Pistachio une a <strong>134 socios</strong> agricultores de Toledo, Cuenca y Ciudad Real.</p>
                            <p>Nuestra fachada en la calle María Pacheco es la puerta a un proyecto que une tradición y vanguardia. El esfuerzo diario de nuestras familias ha forjado unos cimientos sólidos, convirtiéndonos en un referente de unión cooperativa y desarrollo rural.</p>
                            <ul className="stats-list hover-effect">
                                <li><span>36</span><small>Mujeres</small></li>
                                <li><span>85</span><small>Hombres</small></li>
                                <li><span>10</span><small>Empresas</small></li>
                            </ul>
                            <p className="highlight-text">Sembramos historia, cosechamos futuro. La primera campaña en la planta ha sido en 2025, la cual inauguró el 28 de julio el Consejero de Agricultura, D. Julián Martínez Lizán junto con más personalidades. Aquí no solo cultivamos pistachos, cultivamos historias que viajan del corazón de La Mancha al mundo entero.</p>
                        </div>
                        <div className="about-image reveal fade-left image-container">
                            <img src="/images/Placa.jpg" alt="Inauguración de la cooperativa" className="parallax-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Production Section */}
            <section id="production" className="section bg-dark py-lg text-white">
                <div className="container center-text">
                    <h2 className="section-title reveal fade-up">Magnitud y Excelencia</h2>
                    <p className="subtitle reveal fade-up delay-1">Combinamos tradición y maquinaria de última generación en nuestro procesado para ofrecer un pistacho ecológico consistente, sabroso y delicado.</p>

                    <div className="stats-grid">
                        <div className="stat-card reveal fade-up delay-1">
                            <h3>605.500 kg</h3>
                            <p>De cupo de pistacho seco</p>
                        </div>
                        <div className="stat-card reveal fade-up delay-2">
                            <h3>28</h3>
                            <p>Localidades de producción</p>
                        </div>
                        <div className="stat-card reveal fade-up delay-3">
                            <h3>1.000 ha</h3>
                            <p>De cultivo dedicado</p>
                        </div>
                        <div className="stat-card reveal fade-up delay-4">
                            <h3>42%</h3>
                            <p>Producción Ecológica</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campos Section (New) */}
            <section id="campos" className="section py-lg">
                <div className="container">
                    <div className="grid-2 align-center">
                        <div className="about-image reveal fade-right image-container">
                            <img src="/images/Arbol.jpg" alt="Árboles de pistacho" className="parallax-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
                        </div>
                        <div className="about-text reveal fade-left">
                            <h2 className="section-title">El Valor del Fruto</h2>
                            <p className="subtitle">El pistacho lo dice todo. Es pequeño, pero encierra todo nuestro trabajo, toda una tierra y el esfuerzo compartido de quienes creen en él.</p>
                            <p>En Nature Pistachio fomentamos la unión de La Mancha. Cuidamos cada rama con dedicación porque cada paso que damos nos recuerda que hemos iniciado una nueva etapa para nuestra cooperativa.</p>
                            <p className="highlight-text" style={{ marginTop: '1rem', fontSize: '1.1rem' }}>Contamos con las variedades: <strong>Kerman, Sirora, Larnaka y Lost Hill</strong>.</p>
                            <div className="image-container hover-effect" style={{ marginTop: '2rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                                <img src="/images/Pistachos.jpg" alt="Pistachos" className="parallax-zoom" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instalaciones Section (New as requested) */}
            <section id="instalaciones" className="section bg-light py-lg">
                <div className="container">
                    <div className="grid-2 align-center" style={{ direction: 'rtl' }}>
                        <div className="about-image reveal fade-left image-container" style={{ direction: 'ltr' }}>
                            <img src="/images/Instalaciones.jpg" alt="Nuestras instalaciones" className="parallax-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
                        </div>
                        <div className="about-text reveal fade-right" style={{ direction: 'ltr' }}>
                            <h2 className="section-title">Nuestras Instalaciones</h2>
                            <p className="subtitle">Un espacio donde la tecnología abraza a la naturaleza.</p>
                            <p>Ubicados en Corral de Almaguer (Toledo), nuestras instalaciones son un punto de encuentro para más de un centenar de agricultores de la región. El espacio está optimizado para recibir la cosecha minimizando los tiempos de espera y garantizando que el pistacho llegue fresco a nuestras tolvas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proceso Section */}
            <section id="proceso" className="section py-lg">
                <div className="container center-text" style={{ marginBottom: '4rem' }}>
                    <h2 className="section-title reveal fade-up">Nuestro Procesado</h2>
                    <p className="subtitle reveal fade-up delay-1">Innovación, tecnología y mucho cuidado en cada detalle.</p>
                </div>
                <div className="container">
                    <div className="grid-2 align-center">
                        <div className="about-text reveal fade-right">
                            <p>El procesado es el alma que hace único a nuestro pistacho. En Nature Pistachio, las tolvas reciben un pistacho que, a través de maquinaria de última generación, es limpiado, secado, clasificado y almacenado bajo los estándares de trazabilidad más rigurosos del mercado europeo.</p>
                            <p>Combinamos la tradición heredada por nuestros 134 socios con innovadoras técnicas de calibración óptica y secado lento. Esto garantiza que las cualidades organolépticas (sabor, textura y color) permanezcan intactas, obteniendo un producto delicado y 100% fiable.</p>
                            <ul className="icon-list mt-md">
                                <li>✓ Clasificación Óptica de Precisión</li>
                                <li>✓ Secado Controlado al Grado</li>
                                <li>✓ Separación Mecánica Avanzada</li>
                            </ul>
                        </div>
                        <div className="about-image reveal fade-left image-container" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <video autoPlay loop muted playsInline className="parallax-zoom" style={{ display: 'block', width: '100%', maxHeight: '75vh', objectFit: 'cover' }}>
                                <source src="/images/Video_Procesos.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <div className="process-timeline reveal fade-up" style={{ marginTop: '4rem' }}>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--color-brand-primary)', textAlign: 'center' }}>Proceso de Producción</h3>
                        <p style={{ marginBottom: '2.5rem', fontSize: '1rem', color: 'var(--color-text-muted)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem' }}>Descubre cómo transformamos el pistacho desde su recepción hasta estar listo para su almacenamiento. Cada paso garantiza calidad y sabor excepcionales.</p>

                        <div className="horizontal-flowchart">
                            <div className="h-flow-step">
                                <div className="h-flow-icon">1</div>
                                <div className="h-flow-content">
                                    <h4>Recepción del fruto</h4>
                                    <p>Llegada a las tolvas y control de calidad inicial.</p>
                                </div>
                            </div>
                            <div className="h-flow-step">
                                <div className="h-flow-icon">2</div>
                                <div className="h-flow-content">
                                    <h4>Limpieza y despalillado</h4>
                                    <p>Retirada de hojas y ramas.</p>
                                </div>
                            </div>
                            <div className="h-flow-step">
                                <div className="h-flow-icon">3</div>
                                <div className="h-flow-content">
                                    <h4>Pelado inicial</h4>
                                    <p>Primera pasada por la peladora para retirar la piel externa.</p>
                                </div>
                            </div>
                            <div className="h-flow-step">
                                <div className="h-flow-icon">4</div>
                                <div className="h-flow-content">
                                    <h4>Pelado secundario</h4>
                                    <p>Segunda pasada por la repeladora con agua para piel residual.</p>
                                </div>
                            </div>
                            <div className="h-flow-step">
                                <div className="h-flow-icon">5</div>
                                <div className="h-flow-content">
                                    <h4>Pesaje</h4>
                                    <p>Control exacto del pistacho pelado en volumen húmedo.</p>
                                </div>
                            </div>
                            <div className="h-flow-step">
                                <div className="h-flow-icon">6</div>
                                <div className="h-flow-content">
                                    <h4>Flotación</h4>
                                    <p>Separación de frutos vacíos o defectuosos en el tanque.</p>
                                </div>
                            </div>
                            <div className="h-flow-step">
                                <div className="h-flow-icon">7</div>
                                <div className="h-flow-content">
                                    <h4>Presecado</h4>
                                    <p>Golpe de calor intenso que abre la cáscara.</p>
                                </div>
                            </div>
                            <div className="h-flow-step">
                                <div className="h-flow-icon">8</div>
                                <div className="h-flow-content">
                                    <h4>Separación</h4>
                                    <p>Fricción para eliminar cualquier pistacho sin pelar.</p>
                                </div>
                            </div>
                            <div className="h-flow-step">
                                <div className="h-flow-icon">9</div>
                                <div className="h-flow-content">
                                    <h4>Almacenamiento temporal</h4>
                                    <p>Reposo en el silo pulmón hasta el siguiente paso.</p>
                                </div>
                            </div>
                            <div className="h-flow-step">
                                <div className="h-flow-icon">10</div>
                                <div className="h-flow-content">
                                    <h4>Secado final</h4>
                                    <p>Paso por secaderos continuos o estáticos y envasado.</p>
                                </div>
                            </div>
                        </div>

                        <div className="machinery-info mt-md" style={{ background: 'var(--color-surface-hover)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-brand-accent)' }}>
                            <h4 style={{ color: 'var(--color-brand-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: '600' }}>Nuestra Maquinaria Fase 1</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Tolvas de descarga, despalilladora, peladora, repeladora, tanque de flotación, presecadero y separador de peludos.</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Máquinas principales de <strong>Renatus</strong> y <strong>Jar</strong>. Despedregadora <strong>IS&PA</strong>, partidora <strong>Renatus</strong>, óptima de grano <strong>CIMBRIA</strong> y óptica calibradora/separadora <strong>UNITEC</strong>.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Noticias Section */}
            <section id="noticias" className="section bg-light py-lg">
                <div className="container">
                    <div className="center-text reveal fade-up">
                        <h2 className="section-title">Actualidad y Noticias</h2>
                        <p className="subtitle mx-auto">Descubre las últimas novedades y apariciones en medios de Nature Pistachio.</p>
                    </div>
                    <div className="grid-3 mt-md">
                        <a href="https://pistachopro.es/la-cooperativa-nature-pistachio-inaugura-en-corral-de-almaguer-su-planta-de-procesado-de-pistacho-con-capacidad-de-hasta-1-500-toneladas/" target="_blank" rel="noopener noreferrer" className="news-card reveal fade-up delay-1 hover-effect">
                            <div className="news-content">
                                <span className="news-source">PistachoPro</span>
                                <h4>Inauguración de la planta de procesado</h4>
                                <p>Nature Pistachio inaugura en Corral de Almaguer su planta con capacidad de hasta 1.500 toneladas.</p>
                            </div>
                        </a>
                        <a href="https://www.quijotedigital.es/articulo/corral-de-almaguer/nature-pistachio-inaugurara-jueves-corral-almaguer-instalaciones-inversion-4-millones-euros/20250722125244132250.html" target="_blank" rel="noopener noreferrer" className="news-card reveal fade-up delay-2 hover-effect">
                            <div className="news-content">
                                <span className="news-source">Quijote Digital</span>
                                <h4>Instalaciones e Inversión</h4>
                                <p>Nature Pistachio inaugura instalaciones con una inversión de 4 millones de euros.</p>
                            </div>
                        </a>
                        <a href="https://www.solagro.es/solagro-liderara-el-proyecto-innovador-para-la-cooperativa-nature-pistachio-de-corral-de-almaguer/" target="_blank" rel="noopener noreferrer" className="news-card reveal fade-up delay-3 hover-effect">
                            <div className="news-content">
                                <span className="news-source">Solagro</span>
                                <h4>Proyecto Innovador</h4>
                                <p>Solagro liderará el proyecto innovador para la cooperativa de Corral de Almaguer.</p>
                            </div>
                        </a>
                        <a href="http://avanis.es/es/b/las-plantas-de-procesado-de-pistacho-siguen-creciendo-en-castilla-la-mancha" target="_blank" rel="noopener noreferrer" className="news-card reveal fade-up delay-1 hover-effect">
                            <div className="news-content">
                                <span className="news-source">Avanis</span>
                                <h4>Crecimiento en Castilla-La Mancha</h4>
                                <p>Las plantas de procesado de pistacho siguen creciendo en la región.</p>
                            </div>
                        </a>
                        <a href="https://pistachopro.es/nueva-cooperativa-pistachos-corral-almaguer/" target="_blank" rel="noopener noreferrer" className="news-card reveal fade-up delay-2 hover-effect">
                            <div className="news-content">
                                <span className="news-source">PistachoPro</span>
                                <h4>Nueva Cooperativa de Pistachos</h4>
                                <p>Nace una nueva cooperativa de pistachos impulsada en la localidad toledana.</p>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/watch/?v=1316384230146106" target="_blank" rel="noopener noreferrer" className="news-card reveal fade-up delay-3 hover-effect">
                            <div className="news-content">
                                <span className="news-source">Facebook</span>
                                <h4>Video Reportaje CMM</h4>
                                <p>Conoce más sobre nuestras instalaciones y el primer procesado en este reportaje.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Domo Pistachio Section */}
            <section id="domo" className="section py-lg bg-white">
                <div className="container center-text reveal fade-up">
                    <h2 className="section-title">Nuestra Comercializadora: Domo Pistachio</h2>
                    <p className="subtitle mx-auto" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
                        La comercializadora con mayor producción de pistacho de Castilla La Mancha. Somos una Cooperativa de segundo grado.
                    </p>
                    <a href="https://domopistachio.com/" target="_blank" rel="noopener noreferrer" className="btn-primary mt-md hover-effect inline-block">
                        Visita domopistachio.com
                    </a>
                </div>
            </section>

            {/* Footer / Contact Section */}
            <footer id="contact" className="footer">
                <div className="container grid-3 reveal fade-up">
                    <div>
                        <h3 className="footer-title">Nature Pistachio</h3>
                        <p>C/ María Pacheco, 29</p>
                        <p>Corral de Almaguer (Toledo)</p>
                        <p>Tel: +34 614 18 96 78</p>
                        <p>Email: <a href="mailto:naturepistachio@gmail.com" style={{ color: 'inherit' }}>naturepistachio@gmail.com</a></p>
                    </div>
                    <div className="reveal fade-up delay-1">
                        <h3 className="footer-title">Domo Pistachio (Sede)</h3>
                        <p>Paseo de John Lennon, 12 - 2º ofi. 3</p>
                        <p>28906 Getafe - MADRID</p>
                        <p>Tel: +34 653 604 884</p>
                        <p>Email: info@domopistachio.com</p>
                    </div>
                    <div className="reveal fade-up delay-2">
                        <h3 className="footer-title">Redes Sociales</h3>
                        <p>Damos el salto para compartir contigo todo lo que hay detrás de este fruto: trabajo en equipo, compromiso con la tierra y mucho esfuerzo.</p>
                        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <a href="https://www.instagram.com/naturepistachio/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                @naturepistachio
                            </a>
                            <a href="https://www.facebook.com/naterupistachio" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                                </svg>
                                NaturePistachio Cooperativa
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© Copyright 2026 Nature Pistachio & Domo Pistachio</p>
                </div>
            </footer>
        </div>
    );
}


