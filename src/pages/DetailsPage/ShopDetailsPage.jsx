import React, { Component } from "react";

class ShopDetailsPage extends Component {
  render() {
    return (
      <main>
        <section
          className="bgDetails"
          style={{
            backgroundImage: "url(" + "http://lorempixel.com/1400/500/" + ")"
          }}
        >
          <div className="card-shop">
            <h4>Tên shop</h4>
          </div>
        </section>
        <div className="container">
          <h1>Giới thiệu</h1>
          <div className="intro-shop">
            <div id="slider">
              <figure>
                <img src="https://lorempixel.com/500/400/" />
                <img src="https://lorempixel.com/500/400/" />
                <img src="https://lorempixel.com/500/400/" />
                <img src="https://lorempixel.com/500/400/" />
                <img src="https://lorempixel.com/500/400/" />
              </figure>
            </div>
          </div>
          <div className="intro-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellat
            quam repudiandae tempora! Labore natus sequi quod nemo praesentium
            temporibus iure est repudiandae, consequatur enim tempore
            exercitationem similique fugit dolorem. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Vero error voluptatum cum placeat nam
            repellendus quibusdam, eos, tempora deserunt voluptatibus, corporis
            recusandae dolorum neque minus sunt atque soluta reiciendis ex!
          </div>
          <h1>Sản phẩm</h1>
          <div className="grid-container">
            <div className="grid-item">
              <img src="http://lorempixel.com/100/100/" alt="" />
              <h5>name</h5>
              <h5>price</h5>
            </div>
            <div className="grid-item">
              <img src="http://lorempixel.com/100/100/" alt="" />
              <h5>name</h5>
              <h5>price</h5>
            </div>
            <div className="grid-item">
              <img src="http://lorempixel.com/100/100/" alt="" />
              <h5>name</h5>
              <h5>price</h5>
            </div>
            <div className="grid-item">
              <img src="http://lorempixel.com/100/100/" alt="" />
              <h5>name</h5>
              <h5>price</h5>
            </div>
            <div className="grid-item">
              <img src="http://lorempixel.com/100/100/" alt="" />
              <h5>name</h5>
              <h5>price</h5>
            </div>
            <div className="grid-item">
              <img src="http://lorempixel.com/100/100/" alt="" />
              <h5>name</h5>
              <h5>price</h5>
            </div>
            <div className="grid-item">
              <img src="http://lorempixel.com/100/100/" alt="" />
              <h5>name</h5>
              <h5>price</h5>
            </div>
            <div className="grid-item">
              <img src="http://lorempixel.com/100/100/" alt="" />
              <h5>name</h5>
              <h5>price</h5>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default ShopDetailsPage;
