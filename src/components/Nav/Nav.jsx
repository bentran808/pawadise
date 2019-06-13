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
                            <li><a href="#">cửa hàng</a>
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
                            <li><a href="#">đăng nhập</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Nav;