/* @flow */
import mockData from "shared/mockdata";

const { restaurantSearcMatches, menu } = mockData;

export const search = (searchQuery: string) => {
  return {
    type: "SEARCH",
    meta: {
      query: searchQuery,
    },
    payload: new Promise(res => {
      res(restaurantSearcMatches);
    }),
  };
};

export const fetchMenu = (restaurantId: number) => {
  return {
    type: "FETCH_MENU",
    meta: {
      id: restaurantId,
    },
    payload: new Promise(res => {
      res(menu);
    }),
  };
};
