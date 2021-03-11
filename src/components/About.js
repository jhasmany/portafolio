import React, { Component } from 'react'
import foto from '../assets/jhasmany.png'
//import resumen from '../assets/doc/cv_jhasmany.pdf'

export default class About extends Component {
    render() {
        return (
        <section id="about__section" className="presentation">
            <div className="container">
                <h1 className="subtitle">Sobre Mi</h1>
                <img src={foto} className="presentation__picture" alt="jhasmany" />
                <h2>Mi nombre es:</h2>
                <h2>Jhasmany Roque Chambi</h2>
                <br/>
                <p className="presentation__copy">Soy desarrollador web con 4 años de experiencia como Frontend y Backend y 2 años de experiencia en el desarrollo movil. Tambien soy diseñador de Interfaces de Usuario y Experiencia UI/UX. Cuento con conocimientos de Machine Learning en Python y me apasiona aprender las nuevas tecnologias.</p>
                <br/>
                {/* <a href={resumen} target="blank" className="presentation__cta">Ver Curriculum Vitae</a> */}
            </div>
        </section>
        )
    }
}
