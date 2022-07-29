//const config = require("../../config.js")
const stripe = require('stripe')('sk_test_51JPSpCKoSMACykFS7It7GZBBbuNZlq9OiJowQFneajxG7gxM9gy1otqUL4RIEESE2dMOybdB3EpCyNwX4mGmHOqB00qIAfqpfC');

async function CreateStripeSession(req, res) {
  const { item } = req.body;

  const redirectURL = 'https://diag-plus.herokuapp.com/';

  const transformedItem = {
    price_data: {
      currency: 'eur',
      product_data: {
        images: [item.image],
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    description: item.description,
    quantity: item.quantity,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [transformedItem],
    mode: 'payment',
    success_url: redirectURL + '?status=success',
    cancel_url: redirectURL + '?status=cancel',
    metadata: {
      images: item.image,
    },
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;
