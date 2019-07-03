import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import axios from "axios";

const Welcome = (user, onLogout) => {
  console.log("Welcome user:", user);
  return (
    <li className="dropdown">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        <i class="fa fa-user" aria-hidden="true" />
        Ben
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link to="/profile">Profiles</Link>
        </li>
        <li />
        <li>
          <Link to="/" onClick={onLogout}>
            Sign out
          </Link>
        </li>
      </ul>
    </li>
  );
};
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false, user: null };
  }
  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };
  onLogin = user => {
    this.setState({
      user: user
    });
  };
  onLogout = () => {
    axios
      .get("http://localhost:3000/logout")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    var { user } = this.state;
    console.log("user render: ", user);

    return (
      <header>
        <div className="container">
          <Link to="/">
            <h1 className="logo">pawadise</h1>
          </Link>
          {/*thay logo img */}
          <nav>
            <ul>
              <li>
                <a>cửa hàng</a>
                <div className="menu-sub">
                  <ul>
                    <li>
                      <Link to="/shop">shop</Link>
                    </li>
                    <li>
                      <Link to="/cafe">cafe</Link>
                    </li>
                    <li>
                      <Link to="/medical">thú y</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/news">tin tức</Link>
              </li>
              <li>
                <Link to="/events">sự kiện</Link>
              </li>
              <li>
                <Link to="/gallery">bộ sưu tập</Link>
              </li>
              <li>
                <Link to="/contact">liên hệ</Link>
              </li>
              {user !== null ? (
                <Welcome user={user} onLogout={this.onLogout} />
              ) : (
                <li>
                  <button onClick={this.togglePopup}>đăng nhập</button>
                </li>
              )}
            </ul>
          </nav>
        </div>
        {this.state.showPopup ? (
          <LoginForm
            closePopup={this.togglePopup}
            onLogin={this.onLogin}
          />
        ) : null}
      </header>
    );
  }
}

export default Nav;
