import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from "react-router-dom";
import "./Categorias.css";

export default function Categorias() {
  return (
    <>
      <div className="container categorias py-5" area="content">
          <Link class="link-categoria" to="Accesorios">Accesorios</Link>
          <Link class="link-categoria" to="Candados">Candados</Link>
          <Link class="link-categoria" to="Maletas">Maletas</Link>
      </div>
      <Outlet />
    </>
  ); 
}