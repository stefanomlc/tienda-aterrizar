import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import "./home.css";
export default function Home() {
    return (
      <>
        <div className="cotainer categorias" area="content">

          <Link class="link-categoria" to="Accesorios">Accesorios</Link>
          <Link class="link-categoria" to="Candados">Candados</Link>
          <Link class="link-categoria" to="Maletas">Maletas</Link>
          </div>
          <ItemListContainer/>
      <Outlet />

      </>

    );
  }