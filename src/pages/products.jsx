/* import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="about-me__container" area="content">
      <div className="title">Categorías</div>
      <div className="links">
        <Link to="New_arrival">New Arrivla</Link>
        <Link to="Maletas">Maletas</Link>
        <Link to="Candados">Candados</Link>
        <Link to="Accesorios">Accesorios</Link>
      </div>
      <Outlet />
    </div>
  ); 
} */

import { useEffect, useState } from "react";
import {  Link, Outlet } from "react-router-dom";
import { getAllProducts } from "../services/getAllProducts"; //falta agregar
import "./Products.css";
import { isEmpty } from "../utils/array";
import Card from "../components/Card/Card";




export default function Products() {
  const [products, setProducts] = useState([]); 

    useEffect(() : void => {
      getAllProducts().then((products) : void => setProducts(products));
    },[]);

    return (
      <div className="products__containe" area="content">
        {isEmpty(products) ? (
          <p className="loader">Loading projects...</p>
        ) : (
        <div className="projects-list">
          {products.map((producto) => (
            <Card key={producto.id}>
              <Link to={`${producto.id}`}>{producto.name}</Link>
              <div className='product__info'>
                <p>Precio: {producto.precio}</p>
                <p>Stock: {producto.stock}</p>
                
              </div>
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