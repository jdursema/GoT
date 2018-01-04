import React from 'react';
import CardContainer from '../CardContainer';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const fakeStore = configureMockStore()(
  {houses: [{name: 'Stark'}, {name: 'Lannister'}]});

describe('Card', () => {
  it('should be defined', () => {
    const renderedCardContainer =  mount(
      <Provider store={fakeStore}>
        < CardContainer/>
      </Provider>);

    expect(renderedCardContainer).toBeDefined();
  });
  it('should match the snapshot', ()=> {
    const renderedCardContainer =  mount(
      <Provider store={fakeStore}>
        < CardContainer/>
      </Provider>);

    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('should render two cards', () => {
    const renderedCardContainer =  mount(
      <Provider store={fakeStore}>
        < CardContainer/>
      </Provider>);
    const Cards = renderedCardContainer.find('Card');
    const expected = 2;

    expect(Cards.length).toEqual(expected);

  });

});
    
