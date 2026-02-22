import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer";

export default function MainLayout(){
    return(
        <div className="app-container">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}