import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const RootLayout = () => {
    return (
        <div>
            <header className='text-header'>
                <Navbar/>
            </header>
            <Outlet/>
        </div>
    );
};

export default RootLayout;