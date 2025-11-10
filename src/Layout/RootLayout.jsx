import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <Navbar/>
            </header>

            <main className='grow'>
                <Outlet/>
            </main>

            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default RootLayout;