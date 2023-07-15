import React from 'react';
import AppNavbar from "../../components/AppNavbar/AppNavbar";
import Footer from "../../components/Footer/Footer";

const MainWrapper = ({ children }) => {
    return (
        <>
            <AppNavbar />
            { children }
            <Footer />
        </>
    );
};

export default MainWrapper;
