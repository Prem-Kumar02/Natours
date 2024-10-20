/* eslint-disable */
import axios from 'axios';
const stripe = Stripe(
  'pk_test_51QBt6xGPsnF0b32V0lbifWvvMVUkb3fYCVtOCSIIZnlutffDoBOC5dSkfA6l0TFCqNoo2iI69dSuDie6xulcO7IZ00rBYk6IOX',
);
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    );
    console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
