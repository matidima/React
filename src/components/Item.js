import "../App.css";

function Item ({img, nombre, precio}) {
    return (
    <>
    <div className="productoIndex">
        <img src={img} alt={nombre}/>
        <h4>{nombre}</h4>
        <h6>$ {precio}</h6>
        <button className="btn btn-success btnAgregar">Añadir al carrito</button>
    </div>
    </>
    )
}

export default Item;