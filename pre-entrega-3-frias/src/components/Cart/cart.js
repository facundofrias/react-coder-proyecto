import { useEffect, useState } from "react";
import ItemCart from "./ItemCart";
import { useContext } from "react";
import { getCart } from "./getCart";
import { db } from "../FirebaseEcommerce/database";
import { doc, deleteDoc } from "firebase/firestore";
import { ItemsCartCounterContext } from "../ContextPoc/ContextPoc";
import Swal from "sweetalert2";
import { cleanCart } from "./cleanCart";


const Cart = () => {
  const [cart, setCart] = useState([]);
  const [numbreItems, setNumberItems] = useState(0)
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);
  const {removeItemFromCart, cleanItemCartCounter} = useContext(ItemsCartCounterContext);

  const handleDelete = async (id) => {
    const cartItemDoc = doc(db, "cart", id);
    try {
      await deleteDoc(cartItemDoc);
      setIsDeleted(true);
      removeItemFromCart();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const handleCleanCart = async () => {
    try {
      await cleanCart(cleanItemCartCounter);
      setIsDeleted(true);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const ordersData = await getCart();
      setCart(ordersData);
      setNumberItems(ordersData.length);
      let total = 0;
      for (let i = 0; i < ordersData.length; i++) {
        total += (parseFloat(ordersData[i].price)*parseFloat(ordersData[i].quantity));
      }
      setCartTotalPrice(total);
      setIsLoading(false);
    };
      
    fetchData();
      
    return () => clearTimeout(fetchData);
  }, [isDeleted]);

  const showSuccessAlert = () => {
    alert("Compra exitosa");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showSuccessAlert();
  };

  const showCleanCartAlert = async () => {
    Swal.fire({
      title: '¿Realmente desea limpiar el carrito?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          handleCleanCart();
          Swal.fire('El carrito ha sido limpiado.', '', 'success');
        } catch (error) {
          console.error('Error eliminando documentos: ', error);
        }
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="modal">
          <div className="spinner"></div>
          <p>Cargando...</p>
        </div>
      ) : (
        <div className="cart-container">
          {numbreItems > 0 ? (
            <>
              <div className="items-cart-container">

                {cart.map((itemCart) => (
                  <ItemCart
                    key={itemCart.id}
                    id={itemCart.id}
                    title={itemCart.title}
                    quantity={`Uds.: ${itemCart.quantity}`}
                    totalPrice={`$${itemCart.quantity*itemCart.price}`}
                    onDelete={() => handleDelete(itemCart.id)}
                  />
                ))}
              </div>
              <p>Total: ${cartTotalPrice}</p>
              <button type="submit">Comprar Carrito</button>
              <button onClick={showCleanCartAlert}>Limpiar carrito</button>
            </>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      )}
    </>
  );
}

export default Cart;