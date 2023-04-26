export const fetchApiDataInAction = (actionType, promise) => {
  return () => ({
    type: actionType,
    payload: {
      promise,
    },
  });
};
