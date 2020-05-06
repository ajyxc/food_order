/* @flow */

export const addItem = (id: number, price: number, name: string) => {
  return {
    type: "ADD_ITEM",
    payload: {
      id,
      price,
      name,
    },
  };
};

export const updateQuantity = (id: number, quantity: number) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: {
      id,
      quantity,
    },
  };
};
