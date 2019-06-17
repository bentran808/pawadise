import React, { Component } from 'react';

class ContactPage extends Component {
    render() {
        return (
            <main>
                <section className="bgContact">
                    <h1>Contact us</h1>
                </section>

                <div className="container">
                    <div className="info">
                        <h1>Thông tin</h1>
                        <h2><i class="fas fa-envelope"> info@gmail.com</i></h2>
                        <h2><i class="fa fa-phone"></i> 123.456.789</h2>
                        <h2><i class="fas fa-map-marker-alt"></i>70 Phan Thanh</h2>
                    </div>

                    <div className="form-contact">
                        <h1>Write us</h1>
                        <h3>Tên(*)</h3>
                        <input type="text" name="txtName" id="inpName" required />
                        <h3>Email(*)</h3>
                        <input type="text" name="txtEmail" id="inpEmail" required />
                        <h3>Tiêu đề</h3>
                        <input type="text" name="txtTitle" id="inpTitle" />
                        <h3>Nội dung</h3>
                        <textarea name="txtContent" id="taContent" cols="65" rows="5"></textarea>
                    </div>
                </div>
            </main>
        );
    }
}

export default ContactPage;