import React, { Component } from "react";
import { Link } from "react-router-dom";

class CafePage extends Component {
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
    var cafes = [
      {
        id: 1,
        name: "Ritdo - Pet Cafe & Spa",
        address: "66 Trần Bình Trọng, Hải Châu 2, Hải Châu, Đà Nẵng",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis."
      },
      {
        id: 2,
        name: "Saito Pet Cafe",
        address: "220 Hoàng Diệu, Quận Hải Châu, TP. Đà Nẵng",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis."
      },
      {
        id: 3,
        name: "Pet coffee",
        address: " 24 Nguyễn Khuyến, Quận Liên Chiểu, TP. Đà Nẵng",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis."
      },
      {
        id: 4,
        name: "Bộp & Bẹp Milk Tea Station",
        address: "120 Huỳnh Thúc Kháng, Quận Hải Châu, TP. Đà Nẵng",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis."
      },
      {
        id: 5,
        name: "Cá Massage Cafe",
        address: "64 Đường 2/9, Quận Hải Châu, TP. Đà Nẵng",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis."
      },
      {
        id: 6,
        name: "Nobipet Coffee",
        address:
          "169 Cù Chính Lan, TP. Đà Nẵng - 423/29 Trưng Nữ Vương, TP. Đà Nẵng",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis."
      }
    ];

    var { match } = this.props;
    var url = match.url;

    var result = cafes.map((cafe, index) => {
      return (
        <Link to={`${url}/${this.to_slug(cafe.name)}`} key={index}>
          <div className="shop-item">
            <div className="item-left">
              <h2>{cafe.name}</h2>
              <h3 className="rating">
                4,5 <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </h3>
              <h3>{cafe.address}</h3>
              <p>{cafe.description}</p>
            </div>
            <div className="item-right">
              <img src="http://lorempixel.com/100/100/" alt="cafe-img" />
            </div>
          </div>
        </Link>
      );
    });

    return (
      <main>
        <section className="bgCafe">
          <h2>Cafe Page</h2>
        </section>

        <div className="container">
          <ul>{result}</ul>
        </div>
      </main>
    );
  }
}

export default CafePage;
