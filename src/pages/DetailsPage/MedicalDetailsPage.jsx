import React, { Component } from 'react';

class MedicalDetailsPage extends Component {
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
                <h4>Tên dịch vụ</h4>
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
              <h1>Hình ảnh</h1>
              <div className="grid-img">
                <img src="http://lorempixel.com/200/200/" alt="" />
                <img src="http://lorempixel.com/200/200/" alt="" />
                <img src="http://lorempixel.com/200/200/" alt="" />
                <img src="http://lorempixel.com/200/200/" alt="" />
                <img src="http://lorempixel.com/200/200/" alt="" />
                <img src="http://lorempixel.com/200/200/" alt="" />
                <img src="http://lorempixel.com/200/200/" alt="" />
                <img src="http://lorempixel.com/200/200/" alt="" />
              </div>
              <h1>Review</h1>
              <div className="activity">
                <a>
                  <i class="fas fa-pencil-alt" />
                  Viết bài
                </a>
                <a>
                  <i class="fas fa-camera" />
                  Thêm ảnh/video
                </a>
              </div>
              <div className="review-area">
                <a href="#">
                  <i class="far fa-smile" />
                </a>
                <button>Đăng</button>
              </div>
              <div className="review-content">
                <div className="review-header">
                  <img src="https://lorempixel.com/50/50/" alt="avt-user" />
                  <h3>Username</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                  quibusdam id omnis laudantium. Nisi perferendis deserunt esse eius
                  obcaecati ipsa mollitia autem voluptatibus similique architecto?
                  Autem dolorum dignissimos voluptatem ut.
                </p>
                <h5>lượt thích</h5>
                <h5>bình luận</h5>
                <div className="review-btn">
                  <button>
                    <i class="fas fa-heart" />
                    Thích
                  </button>
                  <button>
                    <i class="far fa-comments" />
                    Bình luận
                  </button>
                </div>
                <div className="review-cmt">
                  <img src="https://lorempixel.com/50/50/" alt="avt-user" />
                  <h4>Username</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <img src="https://lorempixel.com/50/50/" alt="avt-user" />
                <div className="cmt-container">
                  <input type="text" name="news-cmt" />
                  <i class="far fa-smile icon" />
                  <i class="fas fa-camera icon" />
                </div>
              </div>
            </div>
          </main>    
        );
    }
}

export default MedicalDetailsPage;