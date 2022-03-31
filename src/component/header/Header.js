import React from 'react';
import logo from '../../images/Logo.svg'
import CustomLink from '../customLink/CustomLink';
const Header = () => {
    return (
        <div className='bg-[#1C2B35] w-full px-8 sm:px-5 h-[80px] text-white'>
            <nav className='flex justify-between items-center h-full'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className={`flex items-center `}>
                    <CustomLink to='/'>Shop</CustomLink>
                    <CustomLink to='/order'>Order</CustomLink>
                    <CustomLink to='/review'>Review</CustomLink>
                    <CustomLink to='/inventory'>Inventory</CustomLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;