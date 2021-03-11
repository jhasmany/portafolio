import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import '../pages/index.css'

const Nav = () => {

    const script = () => {
        const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]
        const linkInicio = document.getElementsByClassName('link')[0];
        const linkSobre = document.getElementsByClassName('link')[1];
        const linkHabilidades = document.getElementsByClassName('link')[2];
        const linkPortafolio = document.getElementsByClassName('link')[3];
        const linkContactame = document.getElementsByClassName('link')[4];

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')
        });

        linkInicio.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')
        });
        linkSobre.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')
        });
        linkHabilidades.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')
        });
        linkPortafolio.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')
        });
        linkContactame.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')
        });

    }

    useEffect(() => {
        script();
    }, []);

    return (
        <div>
            <div className="fixed">
                <div className="container">
                    <nav className="navbar">
                        <Link class="toggle-button">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </Link>
                        <div className="navbar-links">
                            <ul>
                                <li><Link to="/" className="link">Inicio</Link></li>
                                <li><Link to="/about" className="link">Acerca de</Link></li>
                                <li><Link to="/skills" className="link">Habilidades</Link></li>
                                <li><Link to="/portfolio" className="link">Portafolio</Link></li>
                                <li><Link to="/contact" className="link">Contacto</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Nav

