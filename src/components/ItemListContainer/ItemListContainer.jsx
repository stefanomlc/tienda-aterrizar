import { useEffect, useState } from "react";
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

export default ItemListContainer;