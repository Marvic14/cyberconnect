import {BrowserRouter, Routes, Route, Navigate, useLocation} from "react-router-dom";
import MainLayout from "@/layouts/MainLayout.jsx";
import BlankLayout from "@/layouts/BlankLayout.jsx";
import Home from "@/pages/Home/Home.jsx";
import Products from "@/pages/Products/Products.jsx";
import About from "@/pages/About/About.jsx";
import Contacts from "@/pages/Contacts/Contacts.jsx";
import Login from "@/pages/Login/Login.jsx"
import ScrollToTop from "@/components/ScrollToTop.jsx";
import { AnimatePresence } from "framer-motion";


// Criamos um componente interno para poder usar o useLocation()
function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            {/* A 'key' no Routes é o segredo para a animação disparar na troca de URL */}
            <Routes location={location} key={location.pathname}>
                {/* Rotas que herdam Header e Footer */}
                <Route path="/" element={<Navigate to="/homepage" replace />} />
                <Route element={<MainLayout />}>
                    <Route path="/homepage" element={<Home />}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Route>

                {/* Rotas que não herdam Header, Footer nem config globals */}
                <Route element={<BlankLayout />}>
                    <Route path="/login" element={<Login />}/>
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <AnimatedRoutes />
        </BrowserRouter>
    );
}