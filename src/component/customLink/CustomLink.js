import React from 'react';
import {
    Routes,
    Route,
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";
const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (

        <div className='relative'>
            <Link
                className={`ml-[20px] pb-1  ${match ? 'duration-600 ease-in before:content-[""] before:absolute before:border-b-2 before:w-[50%] before:top-[27px] before:border-teal-500  ':'text-white'}`}
                to={to}
                {...props}
            >
                {children}
            </Link>
            
        </div>
    );
};

export default CustomLink;