
//Dado un template de una tienda online con una serie de productos,
//necesitamos que estos productos puedan añadirse a nuestra cesta de la compra.
//Para ello vamos a utilizar el context, de esta manera 
//se compartirá la información de la cesta entre diferentes componentes


import { createContext, useContext, useReducer, useState } from "react";

//con useContext+useReducer

//Paso 1: Crear un contexto para el carrito
//Paso 2: Definir una funcion reducer que añade nuevos productos
//oi los elimina de la cesta
//Paso 3: Crear el provider que contendra el estado y la función reductora

//Paso 1
 export const BasketContext = createContext();

//Paso 2
function BasketReducer(state, action) {
   
     switch (action.type) {
        case "add":
            //Tenemos que buscar si el elto existe en el array(state)
            //para ello usamos findIndex. ver metodo mas abajo
            //action.item.id accede a la propiedad id del producto que se está intentando añadir al carrito
            
            const itemIndex = state.findIndex((item)=> item.id === action.item.id);
            if(itemIndex !==-1){
            // Si el ítem ya está en el carrito, incrementamos su cantidad
                const newState = [...state];
                newState[itemIndex] = {...newState[itemIndex], cantidad:newState[itemIndex].cantidad + 1,};
                return newState
            } else {
                return [...state, {...action.item, cantidad: 1}];
            }
        case "remove":
          return state.filter((item) => item.id !==action.item.id );
        default:
            return state
    } 
}


//Paso 3:
export const CartProvider =({children}) => {
    //basket es el estado inicial , que es un array vacío

    const [basket,dispatch] = useReducer(BasketReducer,[]);
       return(
            <BasketContext.Provider value = {{basket,dispatch}}>
                {children}
            </BasketContext.Provider>
        )
}



//El método findIndex() devuelve el índice del primer elemento de un array 
//que cumpla con la función de prueba proporcionada.
// En caso contrario devuelve -1
//arr.findIndex(callback( element[, index[, array]] )[, thisArg])








//con useContext
//Paso 1: Se crea un contexto para el carrito
//Paso 2: se crea el componente proveedor del contexto
//Aqui tendre que añadir los productos a la cesta.
//validar que el item no esta en el carrito. si esta subo el número
//si no está lo añado.

//Quien  consume el contexto(BasketContext)?? lo consume Cart y prductCart
//El proveedor lo llevo a App.jsx y envuelvo Page(que sera el children)
//para poder consumirlo donde quiera
//En cart tendre que decirle que de CartProvider voy a consumir basket, 
//que es la lista de productos que he añadido
//Tambien lo consumirá en productCart para crear el boton que añade los productos

// //Paso 1
// export const BasketContext = createContext();
// //Paso 2
// export const CartProvider = ({children}) => {
//     const [basket, setBasket] = useState([]);

// //aqui tendre que desarrollar las funciones que me añaden el producto a la cesta
// //con las validaciones correspondientes //*faltan las validaciones!!!
//     const addProduct = (newProduct) =>{
//           setBasket([...basket,newProduct])
//           }
//           console.log(basket);
// return(
//     <BasketContext.Provider value={{basket, addProduct}}>
//         {children}
//     </BasketContext.Provider>
//    )
// };



