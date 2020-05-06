export type Navigation<T> = {
  navigation: {
    navigate: (page: string) => {},
    dispatch: (action: any) => {},
    state: {
      params: T,
    },
  },
};
