import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import { ThemeProvider, useTheme } from '../../../hooks/useTheme';
import '../styles/gtm-scoped.css'; // Import the scoped styles

// Inner component to access context
const GtmLayoutContent = ({ children }) => {
    const { isLight } = useTheme();
    const location = useLocation();

    // Force scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className={`gtm-theme ${isLight ? 'light-mode' : 'dark'} flex flex-col min-h-screen w-full bg-white dark:bg-black transition-colors duration-300`}>
            <NavBar />

            {/* pt-[72px] to account for fixed navbar height */}
            <main className="flex-grow pt-[72px]">
                {children ? children : <Outlet />}
            </main>

            <Footer />
        </div>
    );
};

const GtmLayout = ({ children }) => {
    return (
        <ThemeProvider>
            <GtmLayoutContent>{children}</GtmLayoutContent>
        </ThemeProvider>
    );
};

export default GtmLayout;
