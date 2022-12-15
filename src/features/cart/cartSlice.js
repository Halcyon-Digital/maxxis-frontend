import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    customer: {
      name: '',
      companyName: '',
      address: '',
      town: '',
      thana: '',
      district: 'Dhaka',
      postCode: '',
      mobileNumber: '',
      email: '',
      notes: '',
    },
    order: {
      paymentType: 'Cash on Delivery',
      mobileNumber: '',
      trxID: '',
    },
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item._id !== action.payload._id
      );
      state.cart = removeItem;
    },
    addCustomerName: (state, action) => {
      state.customer.name = action.payload;
    },
    addCustomerCompanyName: (state, action) => {
      state.customer.companyName = action.payload;
    },
    addCustomerAddress: (state, action) => {
      state.customer.address = action.payload;
    },
    addCustomerTown: (state, action) => {
      state.customer.town = action.payload;
    },
    addCustomerDistrict: (state, action) => {
      state.customer.district = action.payload;
    },
    addCustomerPostCode: (state, action) => {
      state.customer.postCode = action.payload;
    },
    addCustomerMobile: (state, action) => {
      state.customer.mobileNumber = action.payload;
    },
    addCustomerEmail: (state, action) => {
      state.customer.email = action.payload;
    },
    addCustomerThana: (state, action) => {
      state.customer.thana = action.payload;
    },
    addCustomerNotes: (state, action) => {
      state.customer.notes = action.payload;
    },
    addOrderNumber: (state, action) => {
      state.order.mobileNumber = action.payload;
    },
    addTrxID: (state, action) => {
      state.order.trxID = action.payload;
    },
    addPaymentType: (state, action) => {
      state.order.paymentType = action.payload;
    },
  },
});
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  addCustomerAddress,
  addCustomerCompanyName,
  addCustomerDistrict,
  addCustomerEmail,
  addCustomerMobile,
  addCustomerName,
  addCustomerNotes,
  addCustomerPostCode,
  addCustomerTown,
  addOrderNumber,
  addTrxID,
  addPaymentType,
  addCustomerThana,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
