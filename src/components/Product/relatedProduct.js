import React from 'react';
import heartIcon from '../../img/heartIcon.png'

const RelatedProduct = () => {
    return (
        <>
            <div className="flex flex-col relative gap-y-2 rounded-xl border border-gray-300 max-w-[300px] p-3 cursor-pointer">
                <div className="flex flex-row justify-end">
                    <img className="w-5 h-5 cursor-pointer " src={heartIcon} alt="icon"/>
                </div>
                <img className="rounded-xl" src="https://petmania.vamtam.com/wp-content/uploads/2022/07/ignore-export10-426x426.jpg" alt="prd"/>
                <p className="font-semibold text-sm">Applaws Natural Wet Cat Food Chicken Breast in Broth</p>
                <p className="font-bold text-xl">$22.99</p>
            </div>
        </>
    );
}

export default RelatedProduct;
