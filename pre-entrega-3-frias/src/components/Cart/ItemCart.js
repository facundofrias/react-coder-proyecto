import "./itemCart.css";



const ItemCart = ({ title, quantity, totalPrice, onDelete }) => {

  return (
    <div className="item-cart">
      <p className="item-cart__title">{title}</p>
      <p className="item-cart__quantity">{quantity}</p>
      <p className="item-cart__total-price">{totalPrice}</p>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  )
}

export default ItemCart;