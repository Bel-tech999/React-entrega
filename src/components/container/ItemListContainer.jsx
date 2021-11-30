import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { ListaProductos } from '../ListaProductos';
import { useParams } from 'react-router-dom';

const ItemListContainer = () =>{

    const [productos, setProductos]= useState([]);
    const [loading, setLoading] = useState(true);

    const { catIdParams } = useParams(); 
    useEffect(() => {
        const promesa = new Promise ((aceptado, rechazado)=> {
            setLoading(true);
            setTimeout(()=> {
            aceptado(ListaProductos)
            }, 2000)
        })
        if(catIdParams){
        promesa.then((ListaProductos)=>{
            setProductos(ListaProductos.filter(producto => producto.categoria === catIdParams)) 
        })
            .finally(()=>{
                setLoading(false)
            }
            )
        } else {
            promesa.then((ListaProductos)=>{
                setProductos(ListaProductos)
            })
            
            .finally(()=>{
                setLoading(false)
            })
        }}, [catIdParams])
    console.log(productos)
    

    return(
    <>
        
        <div className="cajacontenedora">
            {loading 
                ? 
            <h1>Cargando...</h1> 
                : 
            <ItemList lista={productos}/> }
        </div>
    </>
    )
    };

export default ItemListContainer