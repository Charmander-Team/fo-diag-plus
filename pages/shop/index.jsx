import {loadStripe} from '@stripe/stripe-js';
import {useState} from "react";
import axios from "axios";
import Button from "../../Components/Button";

const publishableKey = "pk_test_51JPSpCKoSMACykFS1MwWYut67FZ8Tl2jQOgZPBrzfdDFQsYwRyM8oGcP0HEYQjPvDFcyjSCvsR1v1AitLgIUW6J300VnV4vlbm";
const stripePromise = loadStripe(publishableKey);

const Shop = () => {

  const [product, setProduct] = useState({
    name: 'DiagBPMTools',
    description: 'Ce capteur de frequence cardiaque est programmé pour télétransmetre directement aux medecins de la plateforme',
    image:
      'https://shop.compozan.com/img/cms/Modules%20Arduino/Pulse%20Sensor/Pulse%20Sensor%206.png',
    quantity: 0,
    price: 50,
  });

  const changeQuantity = (value) => {
    // Don't allow the quantity less than 0, if the quantity is greater than value entered by user then the user entered quantity is used, else 0
    setProduct({...product, quantity: Math.max(0, value)});
  };

  const onQuantityPlus = () => {
    changeQuantity(product.quantity + 1);
  };

  const onQuantityMinus = () => {
    changeQuantity(product.quantity - 1);
  };

  const onInputChange = (event) => {
    changeQuantity(parseInt(event.target.value));
  };

  const createCheckOutSession = async () => {
    const STRIPE = await stripePromise;
    const CHECKOUT_SESSION = await axios.post('/api/create-stripe-session', {
      item: product,
    });
    const RESULT = await STRIPE.redirectToCheckout({
      sessionId: CHECKOUT_SESSION.data.id,
    });
    if (RESULT.error) {
      alert(RESULT.error.message);
    }
  };

  return (
    <section className="grid">

      <h3 className='text-8xl mb-8'>Boutique</h3>

      <div className='shadow-lg border rounded p-2 grid justify-items-center'>
        <img src={product.image} width="300" height="150" alt={product.name}/>
        <h2 className='text-2xl'>{product.price} €</h2>
        <h3 className='text-xl'>{product.name}</h3>
        <p className='text-gray-500'>{product.description}</p>
        <p className='text-sm text-gray-600 mt-1'>Quantité:</p>
        <div className='border rounded'>

          <Button label="-"
                  onClick={onQuantityMinus}
                  classList='border-2 border-slate-400 bg-white hover:bg-slate-400 hover:text-white'/>

          <input type='number'
                 className='p-2 w-16'
                 onChange={onInputChange}
                 value={product.quantity}
                 size="4"/>

          <Button label="+"
                  onClick={onQuantityPlus}
                  classList='border-2 border-slate-400 bg-white hover:bg-slate-400 hover:text-white'/>

        </div>
        <p>Total: {product.quantity * product.price} €</p>
        <Button label="Acheter"
                classList="border-2 border-slate-400 bg-white hover:bg-slate-400 hover:text-white disabled:cursor-not-allowed disabled:bg-blue-100'"
                disabled={product.quantity === 0}
                onClick={createCheckOutSession}/>
      </div>

    </section>
  )
}

export default Shop;
