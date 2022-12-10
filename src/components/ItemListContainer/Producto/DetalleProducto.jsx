import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/index";
import "./Project.css";

export default function DetalleProducto(props) {
  const [productData, setProductData] = useState(null);
  const { producto } = useParams();

  useEffect(() => {
    getProduct(project).then((projectData) => {
      console.log(projectData);
      setProductData(projectData);
    });
  }, [producto]);

  return (
    <>
      {productData ? (
        <div className="project__container">
          <div className="project-name">{productData.name}</div>
          <div className="project-detail">{productData.precio}</div>
          <div className="project-detail">{productData.stock}</div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}