import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import WishlistApp from './components/App';
import { initializeApp } from "firebase/app";
import firebaseConfig from './configs/firebase.config';
import { FirebaseProvider } from './contexts/firebase.context';
import { child, get, getDatabase, push, ref, set, update } from 'firebase/database';

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const listsRef = ref(db);
const listRef = push(listsRef);

// update(ref(db), {
//   ["lists/-N0f49hSb8QDAjB0Gw4T/items/0"]: {value: 'hello'}
// }).then(d => console.log(d)).catch(e => console.log(e, 'error'));

// set(listRef, {
//   title: 'hello world'
// })

// get(child(listsRef, 'lists'))
// .then(data => console.log( Object.values(data.val()) ));

function reducer(state = { lists:[], credentials: null }, action) {
  const { type, payload } = action;

  switch (type) {
    case 'INCREASE':
      return { count: state.count + payload };
    case 'AUTH': 
      return {...state, credentials: payload};
    case 'ADDLIST':
      return {  ...state, lists: [...state.lists, payload] };
    // case 'LOGOUT':
    //   return {...state, }
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
