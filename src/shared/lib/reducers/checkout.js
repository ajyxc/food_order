/* @flow */
import Immutable from "seamless-immutable";
import type { ImmutableArray } from "seamless-immutable";

export type CartItem = {
  id: number,
  quantity: number,
  price: number,
};

export type CheckoutState = ImmutableArray<CartItem>;

const INITIAL_STATE = Immutable([]);

export default (state: CheckoutState = INITIAL_STATE, action: any) => {
  let result: CheckoutState;
  switch (action.type) {
    case "ADD_ITEM":
      result = state.asMutable();

      // I really think we can make this logic better.  Let's make this a
      // TODO item for when we optimize.

      for (let i = 0; i < result.length; i++) {
        if (result[i].id === action.payload.id) {
          let temp = {
            ...result[i],
            quantity: result[i].quantity + 1,
          };
          const resultout = result.filter(item => item !== result[i]);
          resultout.push(temp);
          return Immutable(resultout);
        }
      }

      result.push({
        id: action.payload.id,
        quantity: 1,
        price: action.payload.price,
        name: action.payload.name,
      });
      return Immutable(result);

    case "UPDATE_QUANTITY":
      // Same as the comment above, we should optimize this when
      // we get the chance.
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });
    default:
      return Immutable.isImmutable(state) ? state : Immutable(state);
  }
};
