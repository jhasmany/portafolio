import React from 'react';
import Layout from '../components/layout'
import foto from '../images/jhasmany.png'
import resumen from '../resumen.pdf'

const About = () => {
  return (
    <>
      <Layout>
        <section id="about__section" className="presentation">
          <div className="container">
            <h1 className="subtitle">Sobre Mi</h1>
            <img src={foto} className="presentation__picture" alt="jhasmany" />
            <h2>Mi nombre es:</h2>
            <h2>Jhasmany Roque Chambi</h2>
            <br />
            <p className="presentation__copy">Soy desarrollador web con 4 años de experiencia como Frontend y Backend y 2 años de experiencia en el desarrollo movil. Tambien soy diseñador de Interfaces de Usuario y Experiencia UI/UX. Cuento con conocimientos de Machine Learning en Python y me apasiona aprender las nuevas tecnologias.</p>
            <br />
            <a href={resumen}>Ver Curriculum Vitae</a>

          </div>
        </section>
      </Layout>
    </>
  )
}

export default About;
