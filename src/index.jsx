import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import WishlistApp from './components/App';

function reducer(state = { lists:[] }, action) {
  const { type, payload } = action;

  switch (type) {
    case 'INCREASE':
      return { count: state.count + payload };
    case 'ADDLIST':
      return {  ...state, lists: [...state.lists, payload] };
    default: return state;
  }
}
const store = createStore(reducer);



const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider  store={store}>
        <WishlistApp />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);
