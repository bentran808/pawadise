import React, { Component } from 'react';

class NewsPage extends Component {
    render() {
        return (
            <main>
                <section className="bgNews">
                    <h2>News Page</h2>
                </section>

                <div className="container">
                    <div className="activity">
                        <a><i class="fas fa-pencil-alt"></i>Viết bài</a>
                        <a><i class="fas fa-camera"></i>Thêm ảnh/video</a>
                        <a><i class="fas fa-tags"></i>Bán gì đó</a>
                        <a><i class="far fa-calendar-alt"></i>Tạo sự kiện</a>
                    </div>
                    <div className="txt-area">
                        <a href="#"><i class="far fa-smile"></i></a>
                    </div>
                    <div className="activity-1">
                        <div className="row">
                            <div className="column">
                                <i class="far fa-image"></i><button>Ảnh/Video</button>
                            </div>
                            <div className="column">
                                <i class="far fa-hand-peace"></i><button>Họp mặt</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <i class="far fa-calendar-alt"></i><button>Gắn thẻ sự kiện</button>
                            </div>
                            <div className="column">
                                <i class="far fa-chart-bar"></i><button>Thăm dò ý kiến</button>
                            </div>
                        </div>
                        <button className="post">Đăng</button>
                    </div>
                </div>

                <section className="news-content">
                    <div className="news-header">
                        <img src="https://lorempixel.com/50/50/" alt="avt-user" />
                        <h3>Username</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quibusdam id omnis laudantium. Nisi perferendis deserunt esse eius obcaecati ipsa mollitia autem voluptatibus similique architecto? Autem dolorum dignissimos voluptatem ut.</p>
                    <h5>lượt thích</h5>
                    <h5>bình luận</h5>
                    <div className="news-btn">
                        <button><i class="fas fa-heart"></i>Thích</button>
                        <button><i class="far fa-comments"></i>Bình luận</button>
                    </div>
                    <div className="news-cmt">
                        <img src="https://lorempixel.com/50/50/" alt="avt-user" />
                        <h4>Username</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <div className="news-cmt-btn">
                            <button><i class="fas fa-heart"></i>Thích</button>
                            <button>Trả lời</button>
                        </div>
                        <div className="news-rep">
                            <img src="https://lorempixel.com/50/50/" alt="avt-user" />
                            <div className="input-container">
                                <input type="text" name="news-rep" />
                                <i class="far fa-smile icon"></i>
                                <i class="fas fa-camera icon"></i>
                            </div>
                        </div>
                        <img src="https://lorempixel.com/50/50/" alt="avt-user" />
                        <div className="cmt-container">
                            <input type="text" name="news-cmt" />
                            <i class="far fa-smile icon"></i>
                            <i class="fas fa-camera icon"></i>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default NewsPage;