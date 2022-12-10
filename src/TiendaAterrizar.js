import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
/* Css */
import "./TiendaAterrizar.css";

/* Page Imports */
import Home from "./pages/Home";
import Accesorios from "./pages/Accesorios";
import Candados from "./pages/Candados";
import DetalleProducto from "./pages/Producto/DetalleProducto";
import Categorias from "./pages/Categorias";
import Maletas from "./pages/Maletas";
import Politicas from "./pages/Politicas";
import NotFound from "./pages/NotFound";


function TiendaAterrizar() : Element {
    return (
        <>
        <Layout>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<Categorias />}/>
            <Route path="/categorias/accesorios" element={<Accesorios />}/>
            <Route path="/categorias/maletas" element={<Maletas />}/>
            <Route path="/categorias/candados" element={<Candados />}/>
            <Route path="/producto/:productId" element={<DetalleProducto />}/>
           

            <Route path="/politicas" element={<Politicas />}/>
            <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
        </>
    )
}

export default TiendaAterrizar