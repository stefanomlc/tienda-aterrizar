import "./ItemListContainer.css";


function ItemListContainer (props) {
    console.log(props)
    return(
        <div className="text-center">
            <h1>Esto es</h1>
            <h2>{props.texto} </h2>
        </div>

    );
}

export default ItemListContainer;