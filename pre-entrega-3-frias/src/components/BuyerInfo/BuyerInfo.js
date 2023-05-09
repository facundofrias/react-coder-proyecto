import "./buyerInfo.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const BuyerInfo = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleCheckout = (event) => {
    event.preventDefault();
    if (name && phone && email) {
      Swal.fire('Se ha efectuado la compra!.', '', 'success');
    } else {
      Swal.fire('Por favor completa todos los campos.', '', 'warning');
    }
  }

  return (
    <div className="buyer-info-container">
      <form className="buyer-info-form">
        <h4 className="buyer-info-title">Información de comprador/a</h4>
        <label className="buyer-info-label">
          Nombre:
          <input
            className="buyer-info-input"
            type="text"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label className="buyer-info-label">
          Teléfono:
          <input
            className="buyer-info-input"
            type="text"
            name="phone"
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
        <br />
        <label className="buyer-info-label">
          Email:
          <input
            className="buyer-info-input"
            type="email"
            name="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <div className="buy-actions-container">
          <button className="btn btn-success" onClick={handleCheckout}>Checkout</button>
          <button className="btn" onClick={() => navigate(-1)}>Volver</button>
        </div>
      </form>  
    </div>
  );
}

export default BuyerInfo;