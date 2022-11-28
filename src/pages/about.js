import React from 'react';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import arrow from '../img/arrow.png'
const About = () => {
    return (
        <>
            <Header/>

            <div className="flex flex-col gap-y-16 pt-32">
                 <p className="text-5xl font-extrabold text-center">About us</p>

                {/* about 1 */}
                <div className="flex flex-row flex-wrap gap-x-48  justify-center ">
                     <div className="flex flex-col my-auto gap-y-4">
                        <p className="font-extrabold text-2xl">Who We Are</p>
                        <p className="max-w-[450px]">PetMania is a specialty shop offering a curated selection of quality pet products. With both brick-and-mortar and online shops, PetMania focuses on independent designers and contemporary collections thoughtfully crafted to blend seamlessly with your personal style.</p>
                    </div>
                    <div>
                        <img className="w-[605px] h-[280px] object-cover rounded-xl" src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1308557657.jpg" alt="img"/>
                        
                        <img className="absolute scale-50 mt-[-250px] ml-[-300px]" src={arrow} alt="arrow"/>
                    </div>
                    
                </div> 

                {/* banner */}
                <div className="flex flex-col items-center pt-16 text-black">
                    <p className="text-3xl">▼・ᴥ・▼</p>
                    <p className="font-extrabold text-3xl max-w-[500px] text-center">We’re very proud to be and we will always put our before profit.</p>
                    <img className="" src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1300842515.png" alt="banner"/>
                </div>

                {/* about 2 */}

                <div className="flex flex-row flex-wrap gap-x-48 justify-center pt-16">
                    <img className="w-[605px] h-[280px] object-cover rounded-xl" src="https://petmania.vamtam.com/wp-content/uploads/2022/07/istockphoto-1134929522-2048x2048-1.jpg" alt="img"/>
                    <div className="flex flex-col my-auto gap-y-4">
                        <p className="font-extrabold text-2xl">Our Impact</p>
                        <p className="max-w-[450px]">Our Impact comes from our commitment to our customers and to our rescue parters. We pledge to aid in animal rescue efforts, from hosting in-store adoption events & fundraisers, to making donations as our resources allow. We are personally committed to helping animals in need.</p>
                    </div>
                </div> 

                
            </div>
            <Footer/>
        </>
    );
}

export default About;
