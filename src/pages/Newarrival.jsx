import 'bootstrap/dist/css/bootstrap.min.css';


import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Card from "../components/Card/Card";
import { getAllProducts } from "../services/getAllProducts";
import { isEmpty } from "../utils/array";


export default function Newarrival() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // TODO: Make fake API call to get projects
    getAllProducts().then((products) => setProducts(products));
  }, []);

  return (
    <div className="projects-list__container" area="content">

    </div>
  );
}