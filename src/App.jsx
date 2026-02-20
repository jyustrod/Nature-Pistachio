import React, { useEffect } from 'react';
import './index.css';

function App() {
    return (
        <div className="app-container">
            {/* Navigation */}
            <nav className="navbar">
                <div className="logo">
                    <img src="/images/Logo.jpg" alt="Nature Pistachio Logo" style={{ height: '40px', borderRadius: '4px' }} />
                </div>
                <ul className="nav-links">
                    <li><a href="#about">Quiénes Somos</a></li>
                    <li><a href="#instalaciones">Instalaciones</a></li>
                    <li><a href="#proceso">Producción</a></li>
                    <li><a href="#domo">Domo Pistachio</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
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
                        <div className="about-text">
                            <h2 className="section-title">Nuestras Raíces</h2>
                            <p>Somos una cooperativa joven, ambiciosa y llena de ilusión, impulsada por un proyecto liderado por Solagro. Fundada en 2022 con 121 socios, hoy Nature Pistachio une a <strong>134 socios</strong> agricultores de Toledo, Cuenca y Ciudad Real.</p>
                            <p>Nuestra fachada en la calle María Pacheco es la puerta a un proyecto que une tradición y vanguardia. El esfuerzo diario de nuestras familias ha forjado unos cimientos sólidos, convirtiéndonos en un referente de unión cooperativa y desarrollo rural.</p>
                            <ul className="stats-list">
                                <li><span>36</span><small>Mujeres</small></li>
                                <li><span>85</span><small>Hombres</small></li>
                                <li><span>10</span><small>Empresas</small></li>
                            </ul>
                            <p className="highlight-text">Sembramos historia, cosechamos futuro. La primera campaña en la planta ha sido en 2025, la cual inauguró el 28 de julio el Consejero de Agricultura, D. Julián Martínez Lizán junto con más personalidades. Aquí no solo cultivamos pistachos, cultivamos historias que viajan del corazón de La Mancha al mundo entero.</p>
                        </div>
                        <div className="about-image">
                            <img src="/images/Placa.jpg" alt="Inauguración de la cooperativa" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Production Section */}
            <section id="production" className="section bg-dark py-lg text-white">
                <div className="container center-text">
                    <h2 className="section-title">Magnitud y Excelencia</h2>
                    <p className="subtitle">Combinamos tradición y maquinaria de última generación en nuestro procesado para ofrecer un pistacho ecológico consistente, sabroso y delicado.</p>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3>605.500 kg</h3>
                            <p>De cupo de pistacho seco</p>
                        </div>
                        <div className="stat-card">
                            <h3>28</h3>
                            <p>Localidades de producción</p>
                        </div>
                        <div className="stat-card">
                            <h3>1.000 ha</h3>
                            <p>De cultivo dedicado</p>
                        </div>
                        <div className="stat-card">
                            <h3>42% / 58%</h3>
                            <p>Producción Ecológica y Convencional</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campos Section (New) */}
            <section id="campos" className="section py-lg reveal">
                <div className="container">
                    <div className="grid-2 align-center">
                        <div className="about-image">
                            <img src="/images/Arbol.jpg" alt="Árboles de pistacho" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
                        </div>
                        <div className="about-text">
                            <h2 className="section-title">El Valor del Fruto</h2>
                            <p className="subtitle">El pistacho lo dice todo. Es pequeño, pero encierra todo nuestro trabajo, toda una tierra y el esfuerzo compartido de quienes creen en él.</p>
                            <p>En Nature Pistachio fomentamos la unión de La Mancha. Cuidamos cada rama con mimo porque cada rama que crece nos recuerda que hemos iniciado una nueva etapa para nuestra cooperativa cooperativa. Al sol de nuestras tierras crecen pistachos premium.</p>
                            <img src="/images/Pistachos.jpg" alt="Pistachos" style={{ marginTop: '2rem', width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Instalaciones Section (New as requested) */}
            <section id="instalaciones" className="section bg-light py-lg reveal">
                <div className="container">
                    <div className="grid-2 align-center" style={{ direction: 'rtl' }}>
                        <div className="about-image" style={{ direction: 'ltr' }}>
                            <img src="/images/Instalaciones.jpg" alt="Nuestras instalaciones" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
                        </div>
                        <div className="about-text" style={{ direction: 'ltr' }}>
                            <h2 className="section-title">Nuestras Instalaciones</h2>
                            <p className="subtitle">Un espacio donde la tecnología abraza a la naturaleza.</p>
                            <p>Ubicados en Corral de Almaguer (Toledo), nuestras imponentes instalaciones son un punto de encuentro para más de un centenar de agricultores de la región. Todo el espacio está optimizado para recibir un altísimo volumen de cosecha minimizando los tiempos de espera y garantizando que el pistacho llegue lo más fresco posible a nuestras tolvas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proceso Section */}
            <section id="proceso" className="section py-lg reveal">
                <div className="container center-text" style={{ marginBottom: '4rem' }}>
                    <h2 className="section-title">Nuestro Procesado</h2>
                    <p className="subtitle">Innovación, tecnología y mucho cuidado en cada detalle.</p>
                </div>
                <div className="container">
                    <div className="grid-2 align-center">
                        <div className="about-text">
                            <p>El procesado es el alma que hace único a nuestro pistacho. En Nature Pistachio, las tolvas reciben un oro verde que, a través de maquinaria de última generación, es limpiado, secado, clasificado y almacenado bajo los estándares de trazabilidad más rigurosos del mercado europeo.</p>
                            <p>Combinamos la tradición heredada por nuestros 134 socios con innovadoras técnicas de calibración óptica y secado lento. Esto garantiza que las cualidades organolépticas (sabor, textura y color) permanezcan intactas, obteniendo un producto delicado y 100% fiable.</p>
                            <ul className="icon-list mt-md">
                                <li>✓ Clasificación Óptica de Precisión</li>
                                <li>✓ Secado Controlado al Grado</li>
                                <li>✓ Separación Mecánica Avanzada</li>
                            </ul>
                        </div>
                        <div className="about-image">
                            <video autoPlay loop muted playsInline style={{ width: '100%', maxHeight: '60vh', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}>
                                <source src="/images/Video_Procesos.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* Domo Pistachio Section */}
            <section id="domo" className="section py-lg bg-light">
                <div className="container">
                    <h2 className="section-title center-text">Nuestra Comercializadora: Domo Pistachio</h2>
                    <p className="subtitle center-text">La comercializadora con mayor producción de pistacho de Castilla La Mancha. Somos una Cooperativa de segundo grado. <br /><a href="https://domopistachio.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-brand-primary)', fontWeight: '600', textDecoration: 'underline' }}>Visita domopistachio.com</a></p>

                    <div className="grid-3 mt-md">
                        <div className="feature-card">
                            <h4>Integración Vertical</h4>
                            <p>Aunamos agricultores con profesionales del procesado y la comercialización. A principios de 2026, los socios de Domo son: COPISALMA, CROPAV, MF PAVISAN, NATURE PISTACHIO, PISTALIFE, PISTAMANCHA, PISTAQUEROS y SATDELCAMPO.</p>
                        </div>
                        <div className="feature-card">
                            <h4>Exportación Global</h4>
                            <p>Domo Pistachio comercializa el 100% de nuestras cosechas consiguiendo vender en mercados internacionales más del 90% de la producción de sus cooperativas socias, sin abandonar los clientes nacionales.</p>
                        </div>
                        <div className="feature-card">
                            <h4>100% Fiable</h4>
                            <p>Fiabilidad y trazabilidad demostrable al 100%. Calidad consistente a lo largo del tiempo.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Contact Section */}
            <footer id="contact" className="footer">
                <div className="container grid-3">
                    <div>
                        <h3 className="footer-title">Nature Pistachio</h3>
                        <p>C/ María Pacheco, 29</p>
                        <p>Corral de Almaguer (Toledo)</p>
                        <p>Tel: +34 614 18 96 78</p>
                    </div>
                    <div>
                        <h3 className="footer-title">Domo Pistachio (Sede)</h3>
                        <p>Paseo de John Lennon, 12 - 2º ofi. 3</p>
                        <p>28906 Getafe - MADRID</p>
                        <p>Tel: +34 653 604 884</p>
                        <p>Email: info@domopistachio.com</p>
                    </div>
                    <div>
                        <h3 className="footer-title">Redes</h3>
                        <p>Damos el salto para compartir contigo todo lo que hay detrás de este fruto: trabajo en equipo, compromiso con la tierra y mucho esfuerzo.</p>
                        <div style={{ marginTop: '1rem' }}>
                            <a href="https://www.instagram.com/naturepistachio/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-brand-accent)', fontWeight: '600' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                @naturepistachio
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

export default App;
