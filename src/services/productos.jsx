const LISTA_DE_PRODUCTOS = [
    {
        id: "A1",
        name: "Maleta básica",
        Precio: ["1","10000"],
        categoria: "Maletas",

    },
    {
        id: "B1",
        name: "Candado universal",
        Precio: ["5","500"],
        categoria: "Candados",

    },
    {
        id: "C1",
        name: "Etiqueta de maleta perdida",
        Precio: ["100","180"],
        categoria: "Accesorios",

    },
];

const SERVICE_TIMEOUT = 3500;

export function getProductos(){
    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            resolve(LISTA_DE_PRODUCTOS);
        }, SERVICE_TIMEOUT);
    });
}

