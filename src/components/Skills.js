import React, { Component } from 'react'

export default class Skills
 extends Component {
    render() {
        return (
        <>
        <section id="skills__section" className="habilidades">
            <h2 className="container subtitle">Habilidades</h2>
            <div className="container">
                <div className="habilidades__habilidad">
                    <ul>
                        <li>AWS</li>
                        <li>UI/UX</li>
                        <li>Figma</li>
                        <li>Flutter</li>
                        <li>Ionic</li>
                        <li>React</li>
                        <li>VueJS</li>
                        <li>Angular</li>
                        <li>ExpressJS</li>
                        <li>Express Api GateWay</li>
                        
                    </ul>
                </div>
                <div className="habilidades__habilidad">
                    <ul>
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>JasperSoft</li>
                        <li>Java ADF</li>
                        <li>Servicios REST Java</li>
                        <li>Servicios SOAP Java</li>
                        <li>PHP</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="habilidades__habilidad">
                    <ul>
                        <li>POSGRESSQL</li>
                        <li>ORACLE</li>
                        <li>MYSQL</li>
                        <li>SQL SERVER</li>
                        <li>MONGO</li>
                    </ul>
                </div>
                <div className="habilidades__habilidad">
                    <ul>
                        <li>PYTHON</li>
                        <li>Gráficos aplicados en Python</li>
                        <li>Machine Learning</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
        )
    }
}