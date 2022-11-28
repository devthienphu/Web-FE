import { Fragment,useContext } from 'react'
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { Popover, Transition, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {useEffect,useState,useRef} from 'react'
import pawprint from '../../img/pawprint.png'
import logo from '../../img/logo.png'

const solutions = [
{
    name: 'Trang chủ',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: Bars3Icon
},
{
    name: 'Thú cưng',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/Menu',
    icon: Bars3Icon,
},
{ 
    name: 'Giới thiệu', 
    description: "Your customers' data will be safe and secure.", 
    href: '/About', 
    icon: Bars3Icon },
{
    name: 'Liên hệ',
    description: "Connect with third-party tools that you're already using.",
    href: '/Contact',
    icon: Bars3Icon,
},

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {

    return (
        <>
        <Popover className="relative bg-white">
            <div className="mx-auto px-4 sm:px-6 fixed top-0 right-0 left-0 z-10 bg-white">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
                {/* logo web */}
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    
                    <div className="cursor-pointer flex items-center">
                    <img
                        className="h-8 ml-3 w-auto sm:h-10"
                        src={logo}
                        alt="logo"
                    />
                    <span className="font-bold text-2xl px-2 text-blue-600">Anna Pet</span>
                    </div>
                </div>

                {/* menu button */}
                <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>

                <Popover.Group as="nav" className="hidden md:flex space-x-5">
                                        
                    {/* Option */}
                    <NavLink to='/' className={({ isActive }) =>
              			isActive ? "flex flex-row items-center p-2 px-4 rounded-2xl bg-pink-400 text-white": "flex flex-row items-center p-2 px-4 rounded-2xl hover:bg-pink-200"
                    }>
						<p className="font-bold">Trang chủ</p>

					</NavLink>

                    <Menu as="div" className="relative inline-block text-left px-4	">
						<div>
							<Menu.Button className={ "flex flex-row items-center p-2 px-4 rounded-2xl hover:bg-pink-200"}>
                                 <p className="font-bold">Thú cưng</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                               
							</Menu.Button>
						</div>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="origin-top-right absolute p-3 mt-2 w-52 rounded-xl shadow-lg drop-shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ">
							<div className="py-1 divide-y divide-slate-100 space-y-1">
                                <Menu.Item>
								{({ active }) => (
                                    <NavLink to='/pet' className={({ isActive }) =>
                                    isActive ? "flex flex-row items-center gap-2 font-bold text-black bg-yellow-100 rounded-full px-2 p-1": "flex flex-row items-center gap-2 px-2"
                                }>
                                    <img className="h-8 w-8" src={pawprint} alt="icon"/>
									<p className="text-gray-600">Thú cưng</p>
                                    </NavLink> 
								)}
								</Menu.Item>

                                <Menu.Item>
								{({ active }) => (
                                    <NavLink to='/about' className={({ isActive }) =>
                                    isActive ? "flex flex-row items-center gap-2 font-bold text-black bg-yellow-100 rounded-full px-2 p-1": "flex flex-row items-center gap-2 px-2"
                                }>
                                    <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/3737/3737711.png" alt="icon"/>
									<p className="text-gray-600">Thức ăn</p>
                                    </NavLink> 
								)}
								</Menu.Item>

                                <Menu.Item>
								{({ active }) => (
                                    <NavLink to='/about' className={({ isActive }) =>
                                    isActive ? "flex flex-row items-center gap-2 font-bold text-black bg-yellow-100 rounded-full px-2 p-1": "flex flex-row items-center gap-2 px-2"
                                }>
                                    <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/1650/1650477.png" alt="icon"/>
									<p className="text-gray-600">Phụ kiện</p>
                                    </NavLink> 
								)}
								</Menu.Item>

                                <Menu.Item>
								{({ active }) => (
                                    <NavLink to='/about' className={({ isActive }) =>
                                    isActive ? "flex flex-row items-center gap-2 font-bold text-black bg-yellow-100 rounded-full px-2 p-1": "flex flex-row items-center gap-2 px-2"
                                }>
                                    <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/3636/3636096.png" alt="icon"/>
									<p className="text-gray-600">Dịch vụ</p>
                                    </NavLink> 
								)}
								</Menu.Item>
							</div>
							</Menu.Items>
						</Transition>
					</Menu>

                    <NavLink to='/about' className={({ isActive }) =>
              			isActive ? "flex flex-row items-center p-2 px-4 rounded-2xl bg-pink-400 text-white": "flex flex-row items-center p-2 px-4 rounded-2xl hover:bg-pink-200"
                    }>
						<p className="font-bold">Giới thiệu</p>

					</NavLink>

                    <NavLink to='/contact' className={({ isActive }) =>
              			isActive ? "flex flex-row items-center p-2 px-4 rounded-2xl bg-pink-400 text-white": "flex flex-row items-center p-2 px-4 rounded-2xl hover:bg-pink-200"
                    }>
						<p className="font-bold">Liên hệ</p>

					</NavLink>

                </Popover.Group>

                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-x-8">
                    {/* Cart button */}
                    <button className="p-3.5 bg-sky-200 rounded-full hover:bg-sky-300">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                         </svg>
                         <p className="absolute px-1.5 ml-6 bg-red-400 text-white text-sm rounded-full ml-2 mt-[-10px]">1</p>
                     </button>

                    {/* Login button */}
                    {/* <a
                    href="#"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-3xl shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                    onClick={()=>{navigate('/Login')}}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>

                    </a> */}
                    <button className="p-2 bg-sky-200 rounded-full hover:bg-sky-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                         </svg>

                    </button>
                </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                className="fixed top-0 right-0 left-0 z-10 "
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 ">
                    <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                        <div>
                        <img
                            className="h-8 w-auto"
                            src="https://www.pinclipart.com/picdir/big/86-862588_mobi-food-logo-gif-clipart.png"
                            alt="Workflow"
                        />
                        </div>
                        <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <nav className="grid gap-y-8">
                        {solutions.map((item) => (
                            <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                            >
                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                            </a>
                        ))}
                        </nav>
                    </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                    
                    <div>
                        <a
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                        >
                        Sign up
                        </a>

                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?{' '}
                        <a href="#" className="text-indigo-600 hover:text-indigo-500">
                            Sign in
                        </a>
                        </p>
                    </div>

                    </div>
                </div>
                </Popover.Panel>
            </Transition>
         </Popover>
        </>
    );
}

export default Header;
