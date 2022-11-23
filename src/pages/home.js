import React from 'react';
import Header from '../components/Header/header';
import Product from '../components/Product/product';
import Slider from '../components/Slider/slider';

const Home = () => {
    return (
        <>
            <Header/>
            <Slider/>

            <div className="flex flex-row flex-wrap gap-8 items-center justify-center">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            </div>
            
            
        </>
    );
}

export default Home;
