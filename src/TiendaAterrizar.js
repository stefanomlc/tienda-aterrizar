import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
/* Css */
import "./TiendaAterrizar.css";

/* Page Imports */
import Home from "./pages/Home";
import Accesorios from "./pages/Accesorios";
import Candados from "./pages/Candados";
import Newarrival from "./pages/Newarrival";
import Products from "./pages/Products";
import Maletas from "./pages/Maletas";
import Politicas from "./pages/Politicas";
import NotFound from "./pages/NotFound";

function TiendaAterrizar() : Element {
    return (
        <>
        <Layout>
            <Routes>
                <Route path="/" Element={<Home/>} />
                <Route path="/Home" element={<Home />} />
                <Route caseSensitive path="/Products" element={<Products />}>
                    <Route path="Newarrival" element={<Newarrival />} />
                    <Route path="Maletas" element={<Maletas />}>
                    <Route path="Candados" element={<Candados />} />
                    <Route path="Accesorios" element={<Accesorios />} />
                    </Route>
                </Route>
                <Route path="/Politicas" element={<Politicas />} />
                {/* Cuando haya un error */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
        </>
    )
}

export default TiendaAterrizar