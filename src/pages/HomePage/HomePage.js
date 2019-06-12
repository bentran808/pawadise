import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <main>
                <section className="bgImage">
                    <h2>Some content here</h2>
                    <p><i class="fa fa-search"></i><input placeholder="tìm kiếm" /></p>
                </section>

                <section className="about">
                    <div className="container">
                        <h2>sơ lượt web</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus quo molestias repellat dignissimos sint esse, ipsum nemo facere perspiciatis, laborum blanditiis tempora placeat culpa fugit officia praesentium reprehenderit expedita?</p>
                    </div>
                </section>

                <section className="features">
                    <div className="container">
                        <h2>các tính năng</h2>
                        <div className="feature-item feature-1">
                            <h2>cửa hàng</h2>
                        </div>
                        <div className="feature-item feature-2">
                            <h2>cửa hàng</h2>
                        </div>
                        <div className="feature-item feature-3">
                            <h2>cửa hàng</h2>
                        </div>
                        <div className="feature-item feature-4">
                            <h2>cửa hàng</h2>
                        </div>
                        <div className="feature-item feature-5">
                            <h2>cửa hàng</h2>
                        </div>
                        <div className="feature-item feature-6">
                            <h2>cửa hàng</h2>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default HomePage;