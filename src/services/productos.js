import { LISTA_DE_PRODUCTOS } from "../utils/products";

const SERVICE_TIMEOUT = 3500;

export function getAllProducts(){
    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            resolve(LISTA_DE_PRODUCTOS);
        }, SERVICE_TIMEOUT);
    });
}

export function getProduct() {
    return
  }
  