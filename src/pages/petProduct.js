import React from 'react';
import {useParams} from 'react-router-dom';

import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import paws from '../img/paws.png'
import arrowLeft from '../img/arrowLeft.png'
import RelatedProduct from '../components/Product/relatedProduct';
import {petProducts} from '../data/data'


const PetProduct = () => {

    const {id} = useParams();
    const prdID=id;
    let result = petProducts.find( ({ petProductID }) => petProductID === parseInt(prdID) );

    let relatedPrd=[];

    for(var i=0;i<4;i++){
        relatedPrd.push(petProducts[i]);
    }

    return (
       <>
        <Header/>

        <div className="flex flex-col gap-y-32 pt-40">
            {/* products */}
            <div className="flex flex-row flex-wrap mx-auto gap-x-32 justify-center">
                <img className="max-w-lg rounded-xl" src={result.imageUrl} alt="prd"/>
                <div className="flex flex-col ">
                    <div className="p-4">
                        <p className="font-extrabold text-3xl">{result.name}</p>
                        <p className="text-gray-700">Monday – Sunday / 8:00am – 6:00pm</p>
                    </div>
                    <div className="flex flex-col  rounded-xl gap-y-2 text-left max-w-lg p-4">
                        <p className="font-extrabold text-2xl">{result.unitPrice}</p>
                        <b>Detail:</b>
                        <p>Free Standard Shipping with any online purchase of $50 (merchandise subtotal excludes store pick up items; merchandise subtotal is calculated before sales tax, before gift wrap charges, and after any discounts or coupons). Truck delivery and shipping surcharges on over-sized or extremely heavy items will still apply</p>
                        <button className="text-black bg-sky-300 rounded-2xl font-semibold w-fit p-2 px-4 hover:bg-sky-400">Add to cart</button>

                    </div>
                </div>
            </div>

            {/* benefits */}
            {
                (petProducts.category)? 
                <div className="flex flex-row flex-wrap justify-between px-32">
                <div className="flex flex-col max-w-sm gap-y-4">
                    <p className="font-extrabold text-2xl">Benefits</p>
                    <p>Our dog daycare gives you:</p>

                    <div className="flex flex-row gap-x-2 items-center text-black">
                        <img className="h-5 w-5" src={paws} alt="icon"/>
                        <p>Off-leash exercise and socialization</p>
                    </div>
                    <div className="flex flex-row gap-x-2 items-center text-black">
                        <img className="h-5 w-5" src={paws} alt="icon"/>
                        <p>Trainer supervised play</p>
                    </div>
                    <div className="flex flex-row gap-x-2 items-center text-black">
                        <img className="h-5 w-5" src={paws} alt="icon"/>
                        <p>In-house veterinary supervision</p>
                    </div>
                    <div className="flex flex-row gap-x-2 items-center text-black">
                        <img className="h-5 w-5" src={paws} alt="icon"/>
                        <p>Complimentary New Dog Integrations and Behavior Evaluations</p>
                    </div>
                    <div className="flex flex-row gap-x-2 items-center text-black">
                        <img className="h-5 w-5" src={paws} alt="icon"/>
                        <p>Personalized care to match your dog’s temperament and energy level</p>
                    </div>
                </div>

                <div>
                    <img className="rounded-xl max-w-xl" src="https://petmania.vamtam.com/wp-content/uploads/2022/05/pexels-zen-chung-5749777.jpg" alt="img"/>
                    <img className="absolute w-64 h-64 mt-[-450px] ml-[-140px]" src={arrowLeft} alt="arrow"/>
                </div>
                </div> 
                : null
            }
           

            {/* related products */}
            <div className="flex flex-col mx-auto gap-y-4 justify-center items-center">
            <p className="text-2xl font-extrabold ">Related products</p>

            <div className="flex flex-row flex-wrap gap-x-8 mx-auto justify-center ">

                {
                    relatedPrd.map((product,key)=>(
                        <RelatedProduct product={product} key={key}/>
                    ))
                }

            </div>

            </div>
        

        </div>
       
        <Footer/>
       </>
    );
}

export default PetProduct;
