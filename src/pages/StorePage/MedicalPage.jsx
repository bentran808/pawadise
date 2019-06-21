import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MedicalPage extends Component {
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
        var services = [
          {
            id: 1,
            name: "PHÒNG KHÁM THÚ Y ĐÀ NẴNG - DA NANG VETERINARY CLINIC",
            address: "54 Nguyễn Phẩm",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis."
          },
          {
            id: 2,
            name: "Đại Lý Thuốc Thú Y - Thủy Sản Thành Yến",
            address: "44 Nguyễn Viết Xuân",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis."
          },
          {
            id: 3,
            name: "Chi cục Thú y Tp.Đà Nẵng",
            address: "110 Triệu Nữ Vương",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis."
          },
          {
            id: 4,
            name: "Bác Sĩ Thú Y Tận Nhà Tại Đà Nẵng",
            address: "245 Trường Chinh",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis."
          }
        ];
    
        var { match } = this.props;
        var url = match.url;
    
        var result = services.map((service, index) => {
          return (
            <Link
              to={`${url}/${this.to_slug(service.name)}`}
              key={index}
            >
              <div className="shop-item">
                <div className="item-left">
                  <h2>{service.name}</h2>
                  <h3 className="rating">
                    4,5 <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </h3>
                  <h3>{service.address}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="item-right">
                  <img src="http://lorempixel.com/100/100/" alt="service-img" />
                </div>
              </div>
            </Link>
          );
        });
    
        return (
          <main>
            <section className="bgShop">
              <h2>Pet Care Page</h2>
            </section>
    
            <div className="container">
              <ul>{result}</ul>
            </div>
          </main>
        );
      }
}

export default MedicalPage;