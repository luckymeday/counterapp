import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from 'redux';

const initialState = {
  count: 0,
  color: "pink",
  boxColor: [null],
  boxes: [],
  // username: '',
};

function reducer(state = initialState, action) {
  // switch case
  switch (action.type) {
    case "INCREMENT":
      state.count++;
      const box = {
        id: state.count - 1,
        colorBox: null,
        colorBoxes: state.color
      }
      state.boxes.push(box)
      // state.count = state.count + action.payload.number;
      // state.username = action.payload.username;
      break;

    case "DECREMENT":
      state.count--;
      if (state.count <= 0) {
        state.count = 0;
      }
      // state.boxes.pop() will delete the last item 
      state.boxes.pop()
      break;
    default:
      console.log("haha")
      break;

    case "RESET":
      state.count = 0;
      state.boxes = [];
      break;

    case 'CHANGE_COLOR':
      console.log('action:', action)
      state.color = action.payload;
      break;

    case 'CHANGE_ONE_BOX':
      // const boxColors = state.boxColor
      // boxColors[action.payload.index] = action.payload
      state.boxColor[action.payload.index] = action.payload
      state.color = action.payload;
      break;

  }
  return { ...state }; // copy the value of state and make new state
};


// if (action.type === "INCREMENT") {
//   state.count++;
// }
// else if (action.type === "DECREMENT") {
//   state.count--;
//   if (state.count < 0) {
//     state.count = 0;
//   }
// }


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
