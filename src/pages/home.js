import React from 'react';
import Category from '../components/Category/category';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import Product from '../components/Product/product';
import Slider from '../components/Slider/slider';

const Home = () => {
    return (
        <>
            <Header/>
            <Slider/>

            <div className="flex flex-col items-center justify-center py-4">
                <p className="font-bold text-4xl "> What we can do</p>
                <p className="">We look after your little family, we ensure that we will give the best treatment for your little family</p>
                <div className="flex flex-row flex-wrap gap-x-8">
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                </div>
            </div>

            <div className="flex flex-row flex-wrap gap-8 items-center justify-center">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            </div>

            <Footer/>
            
            
        </>
    );
}

export default Home;
