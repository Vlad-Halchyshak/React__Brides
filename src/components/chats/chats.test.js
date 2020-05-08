/* import React from 'react';
import ReactDom from 'react-dom'

import { render } from '@testing-library/react'
import ChatReducer, { SendMessageAction } from '../../redux/Chats_Reducer';

test('lenghth chats incremented', () => {
 let action = SendMessageAction("SomeText"); 
 let state = {
  
  ChatItems: [
    { id: 1, name: "Tanya", age: "24", city: "Kyiv" },
    { id: 2, name: "Vika", age: "27", city: "Lviv" },
    { id: 3, name: "Angela", age: "34", city: "Sumy" },
    { id: 4, name: "Ilona", age: "29", city: "Kyiv" },
  ],

  ChatMessages: [
    { id: 1, name: "Tanya", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus qui rem tempore, laudantium love you babe love you babe" },
    { id: 2, name: "Vika", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus qui rem tempore, laudantium love you babe love you babe" },
    { id: 3, name: "Angela", message: "dolor sit amet consectetur adipisicing elit. Neque ducimus qui rem tempore, laudantium, akaskss love you babe  love you babe love you babe" }
  ],

  MyMessages: [
    { id: 3, name: "Vito", message: "Too many people spend money they haven’t earned, to buy things they don’t want, to impress people they don’t like." },
    { id: 4, name: "Vito", message: "Too many people spend money they haven’t earned, to buy things they don’t want, to impress people they don’t like." },

  ]
}
let newState = ChatReducer(state, action);

expect(newState.MyMessages.length).toBeInTheDocument(5);
}
) */


/* import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import RadioHistoryPage from '../index';
import { store } from '../../../store';
import ReactDOM from 'react-dom';

describe('RadioHistory render', () => {
  it('render without crash', async () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <RadioHistoryPage />
        </Router>
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
}); */
