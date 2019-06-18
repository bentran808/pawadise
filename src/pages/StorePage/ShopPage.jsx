import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShopPage extends Component {
  to_slug = str => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
  };

  render() {
    var shops = [
      {
        id: 1,
        name: "K-Mart",
        address: "70 Phan Thanh",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis."
      },
      {
        id: 2,
        name: "Pet Mart",
        address: "70 Phan Thanh",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis."
      },
      {
        id: 3,
        name: "Paw Mart",
        address: "70 Phan Thanh",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis."
      },
      {
        id: 4,
        name: "Ben Shop",
        address: "70 Phan Thanh",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis."
      }
    ];

    var { match } = this.props;
    var url = match.url;

    var result = shops.map((shop, index) => {
      return (
        <Link
          to={`${url}/${this.to_slug(shop.name)}`}
          key={index}
        >
          <div className="shop-item">
            <div className="item-left">
              <h2>{shop.name}</h2>
              <h3 className="rating">
                4,5 <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </h3>
              <h3>{shop.address}</h3>
              <p>{shop.description}</p>
            </div>
            <div className="item-right">
              <img src="http://loremflickr.com/100/100/shop" alt="shop-img" />
            </div>
          </div>
        </Link>
      );
    });

    return (
      <main>
        <section className="bgShop">
          <h2>Shop Page</h2>
        </section>

        <div className="container">
          <ul>{result}</ul>
        </div>
      </main>
    );
  }
}

export default ShopPage;
