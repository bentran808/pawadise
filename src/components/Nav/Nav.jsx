import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <Link to="/"><h1 className="logo">pawadise</h1></Link> {/*thay logo img */}
                    <nav>
                        <ul>
                            <li><a>cửa hàng</a>
                                <div className="menu-sub">
                                    <ul>
                                        <li><Link to="/shop">shop</Link></li>
                                        <li><Link to="/cafe">cafe</Link></li>
                                        <li><Link to="/medical">thú y</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="/news">tin tức</Link></li>
                            <li><Link to="/events">sự kiện</Link></li>
                            <li><Link to="/gallery">bộ sưu tập</Link></li>
                            <li><Link to="/contact">liên hệ</Link></li>
                            <li><a data-toggle="modal" href="#modal-id">đăng nhập</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="modal fade" id="modal-id">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 class="modal-title">Login Form</h4>
                            </div>
                            <div class="modal-body">
                                
                                <input type="email" name="email" id="inputemail" class="form-control" placeholder="info@gmail.com" required="required" title=""/>
                                <input type="password" name="password" id="inputpwd" class="form-control" value="" required="required" title=""/>
                                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Nav;