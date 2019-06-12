import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <h1 className="logo">pawadise</h1> {/*thay logo img */}
                    <nav>
                        <ul>
                            <li><a href="#">cửa hàng</a>
                                <div className="menu-sub">
                                    <ul>
                                        <li><a href="#">shop</a></li>
                                        <li><a href="#">cafe</a></li>
                                        <li><a href="#">thú y</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#">tin tức</a></li>
                            <li><a href="#">sự kiện</a></li>
                            <li><a href="#">bộ sưu tập</a></li>
                            <li><a href="#">liên hệ</a></li>
                            <li><a href="#">đăng nhập</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Nav;