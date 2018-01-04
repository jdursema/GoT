export const houseReducer = (state=[], action) => {
  switch (action.type) {
  case 'STORE_HOUSE_DATA':
    return action.arrayOfHouses;
  default:
    return state;
  }
};