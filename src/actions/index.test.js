import * as actions from './index';

describe('All actions', () => {
  it('has a type of STORE_HOUSE_DATA', () => {

    const arrayOfHouses = [{name: 'Stark'}, {name: 'Lannister'}];
    const expected = {
      type: 'STORE_HOUSE_DATA',
      arrayOfHouses
    };
    expect(actions.storeHouseData(arrayOfHouses)).toEqual(expected);
  })
})