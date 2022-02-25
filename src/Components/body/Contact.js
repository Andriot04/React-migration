import React, { Component } from 'react';
import sendMailService from '../../Services/sendmail.js';

class ContactComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            surname: '',
            subject: '',
            email: '',
            message:'',
        }
        this.changeSurnameHandler = this.changeSurnameHandler.bind(this);
        this.changeSubjectHandler = this.changeSubjectHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeMessageHandler = this.changeMessageHandler.bind(this);
    }
    sendMailToBackEnd = (e) => {
        e.preventDefault();
        let content = {surname: this.state.surname, subject: this.state.subject, email: this.state.email, message: this.state.message};
        sendMailService.sendMail(content).then( res =>{
            this.props.history.push('/');
        });
    }
    changeSurnameHandler = (event) => {
        this.setState({surname: event.target.value});
    }
    changeSubjectHandler = (event) => {
        this.setState({subject: event.target.value});
    }
    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    changeMessageHandler = (event) => {
        this.setState({message: event.target.value});
    }
    render() {
        return (
            <div>
                <fieldset>
                    <div className="dtr-form-row dtr-form-row-2col">
                        <p className="dtr-form-column">
                            <input name="surname" autoComplete="off" type="text" placeholder="Nom" value={this.state.surname} onChange={this.changeSurnameHandler} />
                        </p>
                        <p className="dtr-form-column">
                            <input type="text" name="subject" placeholder="Sujet" autoComplete="off" value={this.state.subject} onChange={this.changeSubjectHandler}/>
                        </p>
                    </div>
                    <p>
                        <input type="email" name="email" placeholder="Email" autoComplete="off" value={this.state.email} onChange={this.changeEmailHandler} />
                    </p>
                    <p>
                        <textarea rows="6" name="message" placeholder="Votre message" id="message" className="required" value={this.state.message} onChange={this.changeMessageHandler}></textarea>
                    </p>
                    <p className="text-center">
                        <button className="dtr-btn btn-blue dtr-mt-minus30" onClick={this.sendMailToBackEnd}>Envoyer
                        </button>
                    </p>
                    <div id="result"></div>
                </fieldset>
            </div>
        )
    }
}

export default ContactComponent
