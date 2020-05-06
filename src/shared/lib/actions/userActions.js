const mockUser = {
  name: "Yue Wang",
  age: 18,
};

export function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: mockUser,
  };
}

export const increment = {
  type: "INCREMENT",
};

export const decrement = {
  type: "DECREMENT",
};
