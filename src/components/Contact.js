import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div id="contact" className="contact">
                <div className="about_text">
                    <div className="section-content text-center">
                        <h2>CONTACT
                        </h2>
                        <hr />
                    </div>
                </div>
                <div className="contact_title">
                    <div className="main_ct_title">
                        <div className="cl_title">
                            <h4>ADDRESS</h4>
                            <p>123 Street, New York (USA)</p>
                        </div>
                        <div className="cl_title">
                            <h4>PHONE</h4>
                            <p>+123 456 789</p>
                        </div>
                        <div className="cl_title">
                            <h4>EMAIL</h4>
                            <p>info@myemail.com</p>
                        </div>
                    </div>
                    <div className="form_contact">
                        <form action="">
                            <div className="row">
                                <input type="text" placeholder="Name*" />
                                <input type="text" placeholder="Email*" />
                            </div>

                            <textarea cols="40" rows="10" placeholder="Message*">

                            </textarea>
                            <button type="submit">SEND </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
