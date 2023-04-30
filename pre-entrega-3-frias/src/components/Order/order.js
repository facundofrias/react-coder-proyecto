const Order = ({ title, quantity, totalPrice }) => {

  return (
    <div className="order-container">
      <p>{title}</p>
      <p>{quantity}</p>
      <p>{totalPrice}</p>
    </div>
  )
}

export default Order;