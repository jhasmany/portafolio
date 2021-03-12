import React from 'react';
import asfiDigital from '../images/asfi-digital-cic.png'
import portafolio from '../images/templeta-portafolio.png'
import pelicula from '../images/templeta-pelicula.png'
import music from '../images/templeta-music1.png'
import musicDetalle from '../images/templeta-music-detalle.png'
import exchange from '../images/templeta-exchange.png'
import exchangeDetalle from '../images/templeta-exchange-detalle.png'
import asfiMovilUno from '../images/templeta-asfi-movil1.png'
import asfiMovilDos from '../images/templeta-asfi-movil2.png'
import tutorUno from '../images/templeta-profe-tutor1.png'
import tutorDos from '../images/templeta-profe-tutor2.png'
import profe from '../images/templeta-profe-profe.png'

const Project = ({ projects }) => {
  return (
    <>

      {
        projects.map((project) => {
          const { id, title, descriptions, url} = project;
          return (
            <div key={id} className="portafolio__item">
              <div className="container">
                <div className="portafolio__item__text">
                  <div className="portafolio__item__text__titulo">
                    <h1>{title}</h1>
                    {
                      descriptions.map((desc) => {
                        return <p className="portafolio__item__text--formato">{desc}</p>
                      })
                    }
                    <br />
                    <a href={url} target="blank">Ver Pagina Web</a>
                  </div>
                </div>
              </div>

              {(() => {
                if (id === 1) {
                  return (
                    <div className="portafolio__item__proyecto"><img className="image" key="1" src={asfiDigital} alt="asfi digital" /></div>
                  )
                } else if (id === 2) {
                  return (
                    <div className="portafolio__item__proyecto"><img className="image" key="2" src={portafolio} alt="portafolio" /></div>
                  )
                } else if (id === 3) {
                  return (
                    <div className="portafolio__item__proyecto"><img className="image" key="3" src={pelicula} alt="pelicula" /></div>
                  )
                } else if (id === 4) {
                  return (
                    <>
                      <div className="portafolio__item__proyecto"><img className="image" key="4" src={music} alt="music" /></div>
                      <div className="portafolio__item__proyecto"><img className="image" key="5" src={musicDetalle} alt="music" /></div>
                    </>
                  )
                } else if (id === 5) {
                  return (
                    <>
                      <div className="portafolio__item__proyecto"><img className="image" key="6" src={exchange} alt="exhange" /></div>
                      <div className="portafolio__item__proyecto"><img className="image" key="7" src={exchangeDetalle} alt="exhange" /></div>
                    </>
                  )
                } else if (id === 6) {
                  return (
                    <>
                      <div className="portafolio__item__proyecto"><img className="image" key="8" src={asfiMovilUno} alt="asfi movil" /></div>
                      <div className="portafolio__item__proyecto"><img className="image" key="9" src={asfiMovilDos} alt="asfi movil" /></div>
                    </>
                  )
                } else if (id === 7) {
                  return (
                    <>
                      <div className="portafolio__item__proyecto"><img className="image" key="10" src={tutorUno} alt="profe" /></div>
                      <div className="portafolio__item__proyecto"><img className="image" key="11" src={tutorDos} alt="profe" /></div>
                      <div className="portafolio__item__proyecto"><img className="image" key="12" src={profe} alt="profe" /></div>
                    </>
                  )
                }

              })()}

            </div>
          )
        })
      }

    </>
  );
};

export default Project;
