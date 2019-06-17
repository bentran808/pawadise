import React, { Component } from 'react';

class ShopPage extends Component {
    render() {
        return (
            <main>
                <section className="bgShop">
                    <h2>Shop Page</h2>
                </section>

                <div className="container">
                    <div className="shop-item">
                        <div className="item-left">
                            <h2>tên shop</h2>
                            <h3 className="rating">4,5 <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                <i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                            </h3>
                            <h3>địa chỉ</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quidem.</p>
                        </div>
                        <div className="item-right">
                            <img src="http://loremflickr.com/100/100/shop" alt="shop-img" />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default ShopPage;