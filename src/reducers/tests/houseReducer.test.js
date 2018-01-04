import { houseReducer } from '../house-reducer';
import * as actions from '../../actions';

describe('houseReducer', () => {
  it('should return the default state', () => {
    const expected = [];
    
    expect(houseReducer(undefined, {})).toEqual(expected);
  });

  it('should add the house data to state', () => {
    const arrayOfHouses = [{name: 'Stark'}, {name: 'Lannister'}];
    const expected= arrayOfHouses;
    const action = actions.storeHouseData(arrayOfHouses);

    expect(houseReducer(undefined, action)).toEqual(expected);
  });
}); 