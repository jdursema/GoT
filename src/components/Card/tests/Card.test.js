import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('Card', () => {
  it('should match the snapshot', () => {
    const renderedCard = shallow(<Card
      name= {'Stark'}
      founded={'by Julie'}
      seats= {'lots of um'}
      titles= {'Kings of the North'}
      coatOfArms={'Dire Wolf'}
      ancestralWeapons={'Long Sword'}
      words={'Winter is coming'}
      active={false}/>);

    expect(renderedCard).toMatchSnapshot();
  });
});