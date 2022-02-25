import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <header id="dtr-header-global" className="fixed-top">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dtr-header-left">
                            <a className="logo-default dtr-scroll-link" href="#home"><img
                                src="../../images/logo_aurelie_dupont.png" alt="logo" width="108"/></a>
                            <a className="logo-alt dtr-scroll-link" href="#home"><img
                                src="../../images/logo_aurelie_dupont.png" alt="logo" width="108"/></a>
                        </div>
                        <div className="dtr-header-right">
                            <div className="main-navigation dtr-menu-dark">
                                <ul className="sf-menu dtr-scrollspy dtr-nav dark-nav-on-load dark-nav-on-scroll">
                                    <li><a className="nav-link" href="#home">Accueil</a></li>
                                    <li><a className="nav-link" href="#about">Qui suis-je</a></li>
                                    <li><a className="nav-link" href="#monApproche">Mon approche</a></li>
                                    <li><a className="nav-link" href="#services">Pourquoi consulter</a></li>
                                    <li><a className="nav-link" href="#avis">Avis</a></li>
                                    <li><a className="nav-link" href="#tarifs">Tarifs</a></li>
                                    <li><a className="nav-link" href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderComponent