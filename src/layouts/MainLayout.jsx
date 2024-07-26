import React from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';


const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};


export default MainLayout;