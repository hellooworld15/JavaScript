//////////////////////////
//Shoppping Cart
// console.log('Importing module');

// import { cart } from './shoppingCart';

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 2);
// add('apples', 2);

// console.log(cart);
////////////////////////////////

// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//     );
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// shoppingCart2.addToCart('apple', 4);
// shoppingCart2.addToCart('bread', 2);
// console.log(shoppingCart2);

//////////////////////////////////////

// //Export
// export.addToCart = function (product, quantity) {
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`)
// }

// //import
// const {addToCart} = require('./shoppingCart.js');

///////////////////////////////////////////////
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';
// // import cloneDeep from 'lodash';

// const state = {
//   cart: [
//     { product: 'bread', quantity: 5 },
//     { product: 'pizza', quantity: 5 },
//   ],
//   user: { loggedIn: true },
// };
// const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);

// state.user.loggedIn = false;
// // console.log(stateClone);

// // console.log(stateDeepClone);

// if (module.hot) {
//   module.hot.accept();
// }

// class Person {
//   greeting = 'Hey';
//   constructor(name) {
//     this.name = name;
//     // console.log{`${this.#greeting}, ${this.name}`};
//   }
// }
// const jonas = new Person('Jonas');

// console.log('a');
// console.log('Jonas' ?? null);

// console.log(cart.find(el => el.quantity >= 2));
// Promise.resolve('TEST').then(x => console.log(x));

// import 'core-js/stable';
/////////////////////////////////////////////
