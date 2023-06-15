// import { useReducer } from "react";
// import CartContext from "./cart-context";

// const defaultCartStrat={
//     items:[],
//     totalAmount:0
// }
// const cartReducer =(state,action)=>{
//         if(action.type==="Add"){
//             // const updatedItems=state.items.concat(action.item);
//             // const updatedToatlAmount=state.totalAmount+action.item.price;
//             // const updatedItems=state.items.concat(action.item);
//         const updatedToatlAmount=
//         state.totalAmount+action.item.price*action.item.amount;

//         const existinCartItemIndex=state.items.findIndex((item)=>
//             item.id===action.item.id
//         )

//         const existingCartItem=state.items[existinCartItemIndex]

//         let updatedItems;

//         if(existingCartItem){
//             const updatedItem={
//                 ...existingCartItem,
//                 amount:existingCartItem.amount+action.item.amount
//             };
//             updatedItems=[...state.items];
//             updatedItems[existinCartItemIndex]=updatedItem;
//         }else{
//             updatedItems=state.items.concat(action.item);
//         }
//             return {
//                 items:updatedItems,
//                 totalAmount:updatedToatlAmount
//             };
//         }
//         if(action.type==="Remove"){
//             const existingCartItemIndex=state.items.findIndex((item)=>
//             item.id===action.id
//         )
//         const existingItem=state.items[existingCartItemIndex];
//         const updatedToatlAmount=state.totalAmount-existingItem.price;
    
//         let updatedItems;
//         if(existingItem.amount===1){
//             updatedItems =state.items.filter(item=>item.id !==action.id
//         )
//         }else{
//             const updatedItem={...existingItem, amount:existingItem.amount-1}
//             updatedItems=[...state.items];
//             updatedItems[existingCartItemIndex]=updatedItem
//         }
//         return {
//             items:updatedItems,
//             totalAmount:updatedToatlAmount
//         }
    
//         }
//         return defaultCartStrat
// }
// const CartProvider=(props)=>{
//     const[cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartStrat)

//     const addItemToCartHandler=item=>{
//         dispatchCartAction({type:"Add",item:item})
//     };
//     const removeItemFromCarthandler=id=>{
//         dispatchCartAction({type:"Remove",id:id})
//     }
//     const cartContext={
//         items:cartState.items,
//         totalAmount:cartState.totalAmount,
//         addItem:addItemToCartHandler,
//         removeItem:removeItemFromCarthandler
//     };
//     return <CartContext.Provider value={cartContext}>
//         {props.children}
//     </CartContext.Provider>
// }
// export default CartProvider;

import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

//   if (action.type === "Remove") {
//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.id
//     );
//     const existingItem = state.items[existingCartItemIndex];
//     const updatedTotalAmount = state.totalAmount - existingItem.price;

//     let updatedCartItems;
//     if (existingItem.amount === 1) {
//       updatedCartItems = state.items.filter((item) => item.id !== action.id);
//     } else {
//       const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
//       updatedCartItems = [...state.items];
//       updatedCartItems[existingCartItemIndex] = updatedItem;
//     }
//     return {
//       items: updatedCartItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }
if (action.type === "Remove") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    
    if (!existingItem) {
      // Return the current state if the item doesn't exist
      return state;
    }
  
    const updatedTotalAmount = state.totalAmount - existingItem.price;
  
    let updatedCartItems;
    if (existingItem.amount === 1) {
      updatedCartItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedCartItems = [...state.items];
      updatedCartItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  }
  
  
  if (action.type === "UpdateQuantity") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount =
      state.totalAmount +
      (action.quantity - existingItem.amount) * existingItem.price;

    const updatedItem = { ...existingItem, amount: action.quantity };
    const updatedItems = [...state.items];
    updatedItems[existingCartItemIndex] = updatedItem;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "Add", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "Remove", id: id });
  };

  const updateItemQuantityHandler = (id, quantity) => {
    dispatchCartAction({ type: "UpdateQuantity", id: id, quantity: quantity });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    updateItemQuantity: updateItemQuantityHandler,
  };

  return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
 }
export default CartProvider;
