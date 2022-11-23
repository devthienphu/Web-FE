import React from 'react';
import logo from '../../img/logo.png'
const SignUpForm = () => {
    return (
        <>
             <section className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        {/* Logo shop */}
                        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                            <img className="w-8 h-8 mr-2" src={logo} alt="logo"/>
                            Flowbite    
                        </a>

                        {/* sign up form */}
                        <div className="w-full bg-rose-50 rounded-lg shadow shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 rounded-full bg-rose-50 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Tạo tài khoản
                                </h1>
                                    
                                {/* input */}
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Họ và tên</label>
                                        <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Tên của bạn là?" required=""/>
                                    </div>

                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Địa chỉ email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                                    </div>

                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                                    </div>

                                    <div>
                                        <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Xác nhận mật khẩu</label>
                                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="terms" className="font-light text-gray-500">Tối chấp nhận <a className="font-medium text-primary-600 hover:underline" href="#">các chính sách và điều khoản</a></label>
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full text-white bg-sky-300  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tạo tài khoản</button>
                                    <p className="text-sm font-light text-gray-500">
                                        Đã có tài khoản? <a href="#" className="font-medium text-sky-500 hover:underline">Đăng nhập ngay</a>
                                    </p>
                                </form>
                            </div>
                        </div>
            </section>
        </>
    );
}

export default SignUpForm;
