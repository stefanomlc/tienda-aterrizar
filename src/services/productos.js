import { LISTA_DE_PRODUCTOS } from "../utils/products";

const SERVICE_TIMEOUT = 1000;

export function getAllProducts(){
    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            resolve(LISTA_DE_PRODUCTOS);
        }, SERVICE_TIMEOUT);
    });
}

export function getProduct(productoid) {
  return new Promise((resolve, reject) => {
    const targetProject = LISTA_DE_PRODUCTOS.find(
      (product) => product.id === productoid       
    );
    setTimeout(() => resolve(targetProject), 1000);
  });
}


export function getCategorias(projectId) {
    return new Promise((resolve, reject) => {
      const targetProject = LISTA_DE_PRODUCTOS.find(
        (project) => project.categoria === projectId
      );
      setTimeout(() => resolve(targetProject), 1000);
    });
  }