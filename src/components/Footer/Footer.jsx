import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-content">
                    <div className="footer-section logo">
                        <h1 className="logo-text"><span>Paw</span>adise</h1>
                    </div>
                    <div className="footer-section"></div>
                    <div className="footer-section contact">
                        <span><i className="fa fa-map-marked-alt"></i> &nbsp; 70 Phan Thanh</span>
                        <span><i className="fa fa-phone"></i> &nbsp; 123-456-789</span>
                        <span><i className="fa fa-envelope"></i> &nbsp; info@gmail.com</span>
                        <span><i className="fa fa-facebook-square"></i> &nbsp; facebook.com </span>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; Ylinkee | Designed by Team High
                </div>
            </footer>
        );
    }
}

export default Footer;