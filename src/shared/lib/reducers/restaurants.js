/* @flow */
import Immutable from "seamless-immutable";
import type { ImmutableArray } from "seamless-immutable";
export type Restaurant = {
  id: number,
  name: string,
  rating: number,
  address: string,
  lattitude: number,
  longitude: number,
  priceRange: number,
  photo: string,
  openTime: number,
  closeTime: number,
  tags: string[],
};

export type MenuSections = {
  name: string,
  items: MenuItem[],
};

export type MenuItem = {
  id: number,
  name: string,
  description: string,
  price: number,
};

export type RestaurantsState = ImmutableArray<Restaurant>;

const INITIAL_STATE = Immutable([]);

export default (state: RestaurantsState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "SEARCH":
      return Immutable(action.payload);
    case "FETCH_MENU": {
      const newState = state.map(item => {
        return item.id !== action.meta.id
          ? item
          : {
              ...item,
              menu: action.payload,
            };
      });

      return newState;
    }
    default:
      return state;
  }
};
