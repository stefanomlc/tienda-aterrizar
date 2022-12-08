import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
/* Css */
import "./TiendaAterrizar.css";

/* Page Imports */
import Home from "./pages/Home";
import Accesorios from "./pages/Accesorios";
import Candados from "./pages/Candados";
import New_arrival from "./pages/New_arrival";
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
                <Route caseSensitive path="/Productos" element={<Products />}>
                    <Route path="New_arrival" element={<New_arrival />} />
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