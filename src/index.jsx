import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import WishlistApp from './components/App';
import { initializeApp } from "firebase/app";
import firebaseConfig from './configs/firebase.config';
import { FirebaseProvider } from './contexts/firebase.context';

const app = initializeApp(firebaseConfig);

function reducer(state = { lists:[], credentials: null }, action) {
  const { type, payload } = action;

  switch (type) {
    case 'INCREASE':
      return { count: state.count + payload };
    case 'AUTH': 
      return {...state, credentials: payload};
    case 'ADDLIST':
      return {  ...state, lists: [...state.lists, payload] };
    default: return state;
  }
}
const store = createStore(reducer);



const root = createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider  store={store}>
        <FirebaseProvider value={app}>
            <WishlistApp />
        </FirebaseProvider>
        
      </Provider>
    </BrowserRouter>

  //</React.StrictMode> */
);
