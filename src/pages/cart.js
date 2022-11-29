import React from 'react';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import wishlist from '../img/wishlist.png';


const Cart = () => {
    return (
       <>
            <Header/>
            <div className="pt-32">
                <div className="flex flex-col text-center justify-center items-center gap-y-4">
                    <p className="font-extrabold text-4xl text-black">Cart</p>
                    <p>There are no products on the Cart!</p>
                    <img className="ml-8 max-w-[200px]" src={wishlist} alt="list"/>
                    <p>Look for the heart to save favorites while you shop.</p>
                    <button className="text-white font-semibold bg-gray-700 w-fit rounded-3xl p-2 px-6">Start shopping</button>
                </div>
            </div>
            <Footer/>
       </>
    );
}

export default Cart;
