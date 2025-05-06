import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProductsFetch } from '../data/products.js';
// import '../data/cart-class.js';

new Promise((resolve) => {
  loadProductsFetch(() => {
  resolve();
  })
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
})

