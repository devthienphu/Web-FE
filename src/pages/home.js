import React from 'react';
import Category from '../components/Category/category';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import Product from '../components/Product/product';
import Slider from '../components/Slider/slider';

import petCate from '../img/petCate.png';
import petFood from '../img/petFood.png';
import petShampoo from '../img/petShampoo.png';
import petCollar from '../img/petCollar.png';
import NewsLetter from '../components/News Letter/newsLetter';

const categories=[
    {
        title:'Thú cưng',
        color:'green',
        image:petCate,
    },
    {
        title:'Thức ăn',
        color:'yellow',
        image:petFood,
    },
    {
        title:'Phụ kiện',
        color:'indigo',
        image:petCollar,
    },
    {
        title:'Dịch vụ',
        color:'rose',
        image:petShampoo,
    }
]

const Home = () => {
    return (
        <>
            <Header/>
            <Slider/>

            <div className="flex flex-col items-center justify-center py-4 gap-2">
                <p className="font-bold text-4xl "> What we can do</p>
                <p className="">We look after your little family, we ensure that we will give the best treatment for your little family</p>
                <div className="flex flex-row flex-wrap gap-x-8 py-4">
                    {
                        categories.map((cate,key)=>(
                            <Category key ={key} cate={cate}/>
                        ))
                    }
                </div>
            </div>

            <p className="text-center text-5xl py-8">Top Sale</p>

            <div className="flex flex-row flex-wrap gap-8 items-center justify-center">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
                    
            <NewsLetter/>

            <Footer/>
            
            
        </>
    );
}

export default Home;
