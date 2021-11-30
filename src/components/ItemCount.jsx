import {useState} from 'react' 

const ItemCount = ({initial, stock, onAdd}) => {
    const [ count, setCount]= useState(initial) 

    function Sumar (){
        if (count<stock){
            setCount(count + 1)
        }
    }

    function Restar (){
        if (stock>1){
            setCount(count - 1)
        } else {
            setCount(0);
        }
    }

    function Agregar(){
        onAdd(count)
        setCount(initial)
    }

    return (
        <>
        <section>
            <button onClick={Sumar}>+</button>
            {count}
            <button onClick={Restar}>-</button>
            <button onClick={Agregar}>Agregar al carrito</button>
        </section>

        </>
    )

}

export default ItemCount 