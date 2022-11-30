import React from 'react';

const NewsLetter = () => {
    return (
        <> 
               <div className="hidden lg:flex flex-col gap-y-2 m-auto bg-gradient-to-r from-sky-100 to-pink-200 w-fit p-16 px-72 rounded-xl mt-8">
                    <p className="text-5xl font-semibold">Join With Us</p>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                    <div className="flex flex-row">
                        <input type="email" name="email" id="email" className="bg-gray-50  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com"/>
                        <button className="bg-sky-200 rounded-xl p-2">Subcribe</button>
                    </div>
               </div>
        </>
    );
}

export default NewsLetter;
