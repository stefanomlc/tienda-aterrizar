/* import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { getProductos } from "../../services/productos";


function ItemListContainer (props) {
    const [groupData, setGroupData] = useState([]);
    console.log(props)

    useEffect(() => {
        getProductos()
            .then((groups) => setGroupData(groups))
            .catch((error) => 
            console.error("[PRODUCTOS_SERVICE]; ERROR -", error));
            setGroupData([]);
    })

    return() => console.log("Se desmonto el componente productos");

    return(
        <div className="text-center">
            <h1>Esto es</h1>
            <h2>{props.texto} </h2>
        </div>

    );
}

export default ItemListContainer; */


import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Card from "../../components/Card/Card";
import { getAllProducts } from "../../services/getAllProducts";
import { isEmpty } from "../../utils/array";
import "./ItemListContainer.css";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // TODO: Make fake API call to get projects
    getAllProducts().then((products: any) => setProducts(products));
  }, []);

  return (
    <div className="projects-list__container" area="content">
      {isEmpty(products) ? (
        <p className="loader">Loading projects...</p>
      ) : (
        <div className="projects-list">
            
            {products.map((producto) => (
                <Card key={producto.id}>
                  <NavLink 
                    className="product-name"
                    to={`/categoria/newarrival/${producto.id}`}>
                    {producto.name}
                  </NavLink>
                  <div>
                    <p>Precio {producto.precio}</p>
                    <p>Stock {producto.stock}</p>
                  </div>

                {/* <Link to={`${producto.id}`}>{producto.name}</Link> */}
{/*                 <div className="project-tech-list">
                    <p>precio {producto.precio}</p>
                    
                </div> */}
            </Card>
          ))}
        </div>
      )}
      <div className="project-detail">
        <Outlet />
      </div>
    </div>
  );
}