import React from 'react';
import { useNavigate } from 'react-router-dom'

import logo from '../../img/logo.png'
const SignInForm = () => {
    const navigate=useNavigate();

    return (
        <>
             <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                        {/* Logo shop */}
                        <div onClick={()=>(navigate('/'))} className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                            <img className="w-8 h-8 mr-2" src={logo} alt="logo"/>
                            PetMama    
                        </div>

                        {/* sign up form */}
                        <div className="z-[100] w-full bg-rose-50 rounded-lg shadow shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 rounded-full bg-rose-50 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Tạo tài khoản
                                </h1>
                                    
                                {/* input */}
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Địa chỉ email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                                    </div>

                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                                    </div>
                                    
                                    <button type="submit" className="w-full text-white bg-sky-300  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tạo tài khoản</button>
                                    <p className="text-sm font-light text-gray-500">
                                        Chưa có tài khoản? <a href="#" className="font-medium text-sky-500 hover:underline">Đăng ký ngay</a>
                                    </p>
                                </form>
                            </div>
                        </div>
            </section>
        </>
    );
}

export default SignInForm;
