import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import BlankLayout from "./layouts/BlankLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import About from "./pages/About/About.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import Login from "./pages/Login/Login.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx";


export default function App(){
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                {/* Rotas que herdam Header e Footer */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/produtos" element={<Products/>}/>
                    <Route path="/QuemSomos" element={<About/>}/>
                    <Route path="/Contatos" element={<Contacts/>}/>
                </Route>

                {/* Rotas que não herdam Header, Footer nem config globals */}
                <Route element={<BlankLayout />}>
                    <Route path="/login" element={<Login />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}