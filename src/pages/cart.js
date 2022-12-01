import React from 'react';
import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'

import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import CartPrd from '../components/Product/cartPrd';
import wishlist from '../img/wishlist.png';
import { AddContext } from '../App';

const cart =[
    {
        petID:1,
        name:'Golden đực siêu cưng',
        unitPrice:160000,
        breed:'Chó Golden Retriever',
        isBought:false,
        imageUrl:'https://matpetfamily.com/wp-content/uploads/2022/10/8686e91cb9fb7ea527ea.jpg',
        age:5,
        discountedPrice:null
    },
    {
        petID:2,
        name:'Golden đực siêu cưng',
        unitPrice:160000,
        breed:'Chó Golden Retriever',
        isBought:false,
        imageUrl:'https://matpetfamily.com/wp-content/uploads/2022/10/b2fe27874105865bdf14-600x792.jpg',
        age:5,
        discountedPrice:null
    },
    {
        petServiceID:1,
        name:'Vệ sinh tai, mắt',
        unitPrice:1414141,
        imageUrl:'https://matpetfamily.com/wp-content/uploads/2020/06/kiotviet_2999d4a81819cdbc0131256d32cccaeb-300x300.jpg',
        type:null,
        discountedPrice:null
    },
    {
        petProductID:1,
        name:'Áo AmBaby 4 chân',
        unitPrice:130000,
        imageUrl:'https://matpetfamily.com/wp-content/uploads/2020/07/kiotviet_e9850a2f574050228375c3e7b7a22803-300x300.jpeg',
        category:'Phụ kiện thú cưng',
        quantity:100,
        discountedPrice:null
    },
];

const Cart = ({onRemove}) => {

    const cartItems= useContext(AddContext);
    const navigate = useNavigate();

    return (
       <>
            <Header/>
                <div className="pt-32">
                    {
                    (cartItems.length ===0)?<div className="flex flex-col text-center justify-center items-center gap-y-4">
                        <p className="font-extrabold text-4xl text-black">Cart</p>
                        <p>There are no products on the Cart!</p>
                        <img className="ml-8 max-w-[200px]" src={wishlist} alt="list"/>
                        <p>Look for the heart to save favorites while you shop.</p>
                        <button className="text-white font-semibold bg-gray-700 w-fit rounded-3xl p-2 px-6" onClick={()=>{navigate('/pet')}}>Start shopping</button>
                    </div>
                    :<div className="flex flex-col justify-center mx-auto items-center gap-4 pb-40">
                        {
                            cartItems.map((product,key) => (
                                <CartPrd onRemove={onRemove} product={product} key={key}/>
                            ))
                        }
                        
                    </div>
                    }
                </div>
            <Footer/>
       </>
    );
}

export default Cart;
