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
    const navigate = useNavigate();
    return (
        <>
        <Popover className="relative bg-white">
            <div className="mx-auto px-4 sm:px-6 fixed top-0 right-0 left-0 z-10 bg-white">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-between md:space-x-10">

                {/* menu button */}
                <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>

                <Popover.Group as="nav" className="hidden md:flex space-x-1 justify-start">
                                        
                    {/* Option */}

                    <NavLink to='/' className={({ isActive }) =>
              			isActive ? "flex flex-row items-center p-1 px-2 rounded-2xl bg-yellow-200": "flex flex-row items-center p-2 px-4 rounded-2xl hover:bg-pink-200"
                    }>
						<p className="font-bold text-sm">Trang chủ</p>

					</NavLink>

                    <Menu as="div" className="relative inline-block text-left px-4	">
						<div>
							<Menu.Button className={ "flex flex-row text-sm items-center p-2 px-4 rounded-2xl hover:bg-yellow-100"}>
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
                                    <NavLink to='/petFood' className={({ isActive }) =>
                                    isActive ? "flex flex-row items-center gap-2 font-bold text-black bg-yellow-100 rounded-full px-2 p-1": "flex flex-row items-center gap-2 px-2"
                                }>
                                    <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/3737/3737711.png" alt="icon"/>
									<p className="text-gray-600">Thức ăn</p>
                                    </NavLink> 
								)}
								</Menu.Item>

                                <Menu.Item>
								{({ active }) => (
                                    <NavLink to='/petProduct' className={({ isActive }) =>
                                    isActive ? "flex flex-row items-center gap-2 font-bold text-black bg-yellow-100 rounded-full px-2 p-1": "flex flex-row items-center gap-2 px-2"
                                }>
                                    <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/1650/1650477.png" alt="icon"/>
									<p className="text-gray-600">Phụ kiện</p>
                                    </NavLink> 
								)}
								</Menu.Item>

                                <Menu.Item>
								{({ active }) => (
                                    <NavLink to='/petService' className={({ isActive }) =>
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
              			isActive ? "flex flex-row items-center p-1 px-2 rounded-2xl bg-yellow-200": "flex flex-row items-center p-2 px-4 rounded-2xl hover:bg-yellow-100"
                    }>
						<p className="font-bold text-sm">Giới thiệu</p>

					</NavLink>

                    <NavLink to='/contact' className={({ isActive }) =>
              			isActive ? "flex flex-row items-center p-1 px-2 rounded-2xl bg-yellow-200": "flex flex-row items-center p-2 px-4 rounded-2xl hover:bg-yellow-100"
                    }>
						<p className="font-bold text-sm">Liên hệ</p>

					</NavLink>

                </Popover.Group>

                {/* logo web */}
                <div className="flex justify-center lg:w-0 lg:flex-1">
                    
                    <div className="cursor-pointer flex flex-col items-center">
                    <img
                        className="h-8  w-auto sm:h-10"
                        src={logo}
                        alt="logo"
                    />
                    <span className="font-bold text-2xl text-gray-900">PetMama</span>
                    </div>
                </div>
                
                {/* login, cart, search button */}
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-x-8">
                    {/* Find button */}
                    <button className="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
                        <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clip-rule="evenodd" />
                    </svg>

                    </button>
                    {/* Cart button */}
                    <button className="p-1 bg-gray-700 rounded-2xl hover:bg-gray-800" onClick={()=>{ navigate("/cart");}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 fill-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>

                         <p className="absolute px-1.5 ml-6 bg-red-400 text-white text-sm rounded-full ml-3 mt-[-10px]">1</p>
                     </button>
                    {/* login button */}
                    <button className="p-1 bg-gray-700 rounded-2xl hover:bg-gray-800" onClick={()=>{ navigate("/signIn");}}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 fill-white">
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
