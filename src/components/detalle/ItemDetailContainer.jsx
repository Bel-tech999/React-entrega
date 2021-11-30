import React from 'react';
import { useEffect, useState } from 'react';
import { ListaProductos } from '../ListaProductos';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

const ItemListContainer = () =>{

    const [productoIndividual, setProductoIndividual]= useState({});
    const [loading, setLoading] = useState(true);

    const { itemIdParams } = useParams(); 

    useEffect(() => {
        const promesaIndividual = new Promise ((aceptado, rechazado)=> {
            setTimeout(()=> {
                aceptado(ListaProductos.find(producto => producto.id == itemIdParams)) 
            }, 2000)
        })
        promesaIndividual.then((prodEncontrado)=>{
            setProductoIndividual(prodEncontrado) 
        })
            .finally(()=>{
                setLoading(false)
            }
            )
        }, [itemIdParams])

    console.log(productoIndividual);
    


    return(
    <>
        
        <div>
            {loading 
                ? 
            <h1>Cargando...</h1> 
                : 
            <ItemDetail item={productoIndividual}/> }
        </div>
    </>
    )
    };

export default ItemListContainer