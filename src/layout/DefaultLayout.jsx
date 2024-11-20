/* import Header from "../components/Header"; 
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";

function DefaultLayout() {

    return (
        <>
            { <Header />}
            <Outlet />
            { <Footer />}
        </>
    )
}

export default DefaultLayout */

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

function DefaultLayout() {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation(); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); 

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    if (isLoading) {
        return (
            <div style={{ minHeight: "150vh", display: "flex", justifyContent: "start", alignItems: "start" }}>
              <span style={{ fontSize: "25px", color: "red" }}>Carregando...</span>
            </div>
          );
    }

    return (
        <div style={{
            minHeight: '150vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Header />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;


