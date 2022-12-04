import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
/* Css */
import "./TiendaAterrizar.css";

/* Page Imports */
import home from "./pages/home";
import accesorios from "./pages/accesorios";
import candados from "./pages/candados";
import new_arrival from "./pages/new_arrival";
import products from "./pages/products";
import maletas from "./pages/malestas";
import NotFound from "./pages/NotFound";

function TiendaAterrizar() : Element {
    return (
        <>
        <Layout>
            <Routes>
                <Route path="/" Element={<home/>} />
                <Route path="/home" element={<home />} />
                <Route caseSensitive path="/productos" element={<products />}>
                {/* Nested Routes a products */}
                    <Route path=":new_arrival" element={<new_arrival />} />
                    <Route path=":maletas" element={<maletas />}>
                    <Route path=":candados" element={<candados />} />
                    <Route path=":accesorios" element={<accesorios />} />
                    </Route>
                </Route>
                <Route caseSensitive path="/politicas" element={<politicas />} />
                {/* Cuando haya un error */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
        </>
    )
}

export default TiendaAterrizar