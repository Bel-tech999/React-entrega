import React from 'react';
import ItemCount from '../ItemCount';

export const ItemDetail = ({item}) => {

    return (
        
        <div>
            <img src={item.imagen} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <ItemCount stock={item.stock} id={item.id} />
        </div>
    )
}
