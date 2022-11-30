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
import {pets} from '../data/data.js'

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


            {/*hot category */}
            <div className="flex flex-col items-center justify-center py-4 gap-2">
                <p className="font-extrabold text-4xl">Trending</p>
                <p className="">We look after your little family, we ensure that we will give the best treatment for your little family</p>
                <div className="flex flex-row flex-wrap gap-x-20 py-4">
                    <div className="flex flex-col items-center gap-y-4">
                        <img className="rounded-[120px] max-w-[350px] hover:scale-105 ease-in duration-300" src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1271793136.jpg" alt="img"/>
                        <p className="text-3xl font-extrabold">Phụ kiện</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-4">
                        <img className="rounded-[120px] max-w-[350px] hover:scale-105 ease-in duration-300" src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1398781665.jpg" alt="img"/>
                        <p className="text-3xl font-extrabold">Dịch vụ</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-4">
                        <img className="rounded-[120px] max-w-[350px] hover:scale-105 ease-in duration-300" src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1140125261.jpg" alt="img"/>
                        <p className="text-3xl font-extrabold">Thức ăn</p>
                    </div>
                </div>
            </div>

            <p className="text-center text-5xl py-8">Top Sale</p>
            
            {/* product */}
            <div className="flex flex-row flex-wrap gap-8 items-center justify-center">
                {
                    pets.map((pet)=>(
                        <Product key={pet.petID} pet={pet}/>
                    ))
                }
            </div>

            {/* advertise */}
            <div className="flex flex-row flex-wrap justify-center gap-x-32">
                    <img className="rounded-xl max-w-md object-cover rounded-xl" src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-513048080.png" alt="img"/>

                    <div className="flex flex-col my-auto gap-y-4">
                        <p className="font-extrabold text-4xl max-w-[450px] text-center">Your <b className="text-yellow-400">favorite</b> pet food & supplies store</p>
                        <p className="max-w-[450px]">Our Impact comes from our commitment to our customers and to our rescue parters. We pledge to aid in animal rescue efforts, from hosting in-store adoption events & fundraisers, to making donations as our resources allow. We are personally committed to helping animals in need.</p>
                    </div>
            </div> 
                    
            <NewsLetter/>

            <Footer/>
            
            
        </>
    );
}

export default Home;
