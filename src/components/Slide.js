import React from 'react'
import imagen from '../images/undraw_dev_productivity_umsq.svg'

const Slide = () => {

    return (
        <header id="header__section" className="hero">
            <div className="container">
                <section className="hero__container">
                    <div className="hero__texts animate">
                        <h1 className="hero__title animate">Jhasmany Roque Chambi</h1>
                        <h2 className="hero__subtitle">
                            Desarrollador Web y Movil<span className="txt-rotate" data-period="500" data-rotate='[ "Web.", "Móvil." ]'></span>
                        </h2>
                    </div>
                    <div>
                        <img className="hero__image" src={imagen} alt="" />
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Slide