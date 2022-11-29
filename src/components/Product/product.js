import React from 'react';
import '../../scss/_product.scss'

import slide5 from '../../img/slide5.png'
const Product = () => {
    return (
    //    <>
    //       <div className="flex flex-col gap-4 max-w-sm ">

    //         {/* product image */}
    //         <div className="bg-sky-100 relative rounded-xl ">
    //             <p className="bg-rose-500 absolute inline-block text-white m-4 p-1 px-3 rounded-full top-[15px] right-[20px] text-center mx-auto">New</p>
    //             <img className="p-8 absolute relative" src="https://i.pinimg.com/originals/78/cf/3e/78cf3eee0658dbf205e821f5a31db5e3.png" alt=""/>

    //             <div className="absolute inline-block bottom-[20px] left-[80px] items-center justify-center mx-auto">
    //                 <div className="flex flex-row gap-8 mx-auto ">
    //                     <button className="bg-white border border-2 border-rose-500 p-2 px-4 text-gray-600 uppercase rounded-full">Add to cart</button>
    //                     <button className="bg-white border border-2 border-rose-500 p-2 rounded-full">
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    //                             <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    //                         </svg>
    //                     </button>
                        
    //                 </div>
    //             </div>

    //         </div>


    //         {/* reviews */}
    //         <div className="flex flex-row justify-between">
    //             <div className="flex flex-row">
    //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-sky-300">
    //                     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    //                 </svg>
    //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-sky-300">
    //                     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    //                 </svg>
    //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-sky-300">
    //                     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    //                 </svg>
    //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-sky-300">
    //                     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    //                 </svg>
    //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-sky-300">
    //                     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    //                 </svg>

    //             </div>
    //             <p>150 reviews</p>
    //         </div>

    //         {/* product name */}
    //         <p className="font-semibold text-lg">Readable content DX22</p>

    //         {/* price */}
    //         <p className="font-bold text-lg text-rose-400">$210.00</p>

    //     </div>
    //    </>

    <>
        <div className="product-item">
            <div className="product-thumb bg-sky-50">
                <a className="d-block" href="product-details.html">
                    <img src={slide5} width="370" height="450" alt="Image-HasTech"/>
                </a>
                <span className="flag-new">new</span>
                <div className="product-action">
                    <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                        <i className="fa fa-expand"></i>
                    </button>
                    <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                        <span>Add to cart</span>
                    </button>
                    <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                        <i className="fa fa-heart-o"></i>
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
                <h4 className="title"><a href="product-details.html">Readable content DX22</a></h4>
                <div className="prices">
                    <span className="price">$210.00</span>
                    <span className="price-old">300.00</span>
                </div>
            </div>
            <div className="product-action-bottom">
                <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                    <i className="fa fa-expand"></i>
                </button>
                <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                    <i className="fa fa-heart-o"></i>
                </button>
                <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    </>
    );
}

export default Product;
