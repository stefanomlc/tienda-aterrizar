import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/productos";
import "./DetalleProducto.css";

export default function DetalleProducto(props) {
  const [productData, setProductData] = useState(null);
  const { project } = useParams();

  useEffect(() => {
    getProduct(project).then((productData) => {
      console.log(productData);
      setProductData(productData);
    });
  }, [project]);

  return (
    <>
      {productData ? (
        <div className="project__container">
          <div className="project-name">{productData.name}</div>

        </div>
      ) : (
        <p>Loading data...</p> 
      )}
    </>
  );
}
