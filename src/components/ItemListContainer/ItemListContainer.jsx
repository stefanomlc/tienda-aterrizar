import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Card from "../../components/Card/Card";
import { getAllProducts , getCategorias } from "../../services/getAllProducts";
import { useParams } from "react-router-dom";
import { isEmpty } from "../../utils/array";
import "./ItemListContainer.css";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categorias } = useParams();

  useEffect(() => {
   // TODO: Make fake API call to get projects
    getAllProducts().then((products) => setProducts(products));
  }, []);
  
/*   getCategorias(categorias).then((products) => {
      console.log(products);
      setProducts(products);
    });
}, [categorias]); */

  return (
    <div className="projects-list__container" area="content">
      {isEmpty(products) ? (
        <p className="loader">Cargando productos...</p>
      ) : (
        <div className="products-list">
        
            
            {products.map((producto) => (
                <Card key={producto.id}>
                  <NavLink 
                    className="product-name"
                    to={`/producto/${producto.id}`}>
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