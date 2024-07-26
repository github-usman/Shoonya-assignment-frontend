import React from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';


const MainLayout = ({ children }) => {
    const location = useLocation();
    const hideHeaderAndFooter = location.pathname==='/' || location.pathname === '/individual-retreat-details';
    return (
        <div>
            {hideHeaderAndFooter && <Header />}
            <main>{children}</main>
            {hideHeaderAndFooter && <Footer />}
        </div>
    );
};


export default MainLayout;