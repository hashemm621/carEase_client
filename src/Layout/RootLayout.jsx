import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Spinner from '../Components/Spinner';
import LoadingPage from '../Components/LoadingPage';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <Navbar/>
            </header>

            <main className='grow'>
                <Outlet/>

                <h2 className="text-8xl">Clear spinner at RootLayout Page</h2>
                <Spinner/>
                <LoadingPage/>
            </main>

            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default RootLayout;