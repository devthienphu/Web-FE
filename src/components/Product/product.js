import React from 'react';
import '../../scss/_product.scss'

import slide5 from '../../img/slide5.png'
const Product = ({pet}) => {
    return (
    <>
        <div className="product-item">
            <div className="product-thumb bg-sky-50">
                
                <img className="max-w-[370px] max-h-[420px]" src={pet.imageUrl} width="370" height="450" alt="Image-HasTech"/>
                <span className="flag-new">new</span>
                <div className="product-action">
                    <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
            <div className="product-info">
                <div className="product-rating">
                    <div className="rating">
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-half-o"></i>
                    </div>
                    <div className="reviews">150 reviews</div>
                </div>
                <h4 className="title"><a href="product-details.html">{pet.name}</a></h4>
                <div className="prices">
                    <span className="price">{pet.unitPrice}</span>
                    <span className="price-old">300.00</span>
                </div>
            </div>
            <div className="product-action-bottom">
                <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    </>
    );
}

export default Product;
