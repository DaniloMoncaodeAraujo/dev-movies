import Header from "../components/Header"; 
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

export default DefaultLayout