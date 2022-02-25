import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <footer id="dtr-footer">
                <div className="dtr-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p> Copyright © Aurelie 2021. All rights reserved.</p>
                            </div>
                            <div className="col-12 col-md-6 text-right">
                                <ul className="dtr-pipe-list">
                                    <li><a href="#">Politique de confidentialité</a></li>
                                    <li><a href="#">Conditions d'utilisation</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterComponent