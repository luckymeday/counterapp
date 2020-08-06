import React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./components/Box";

export default function App() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  // const username = useSelector((state) => state.username);
  const state = useSelector(state => state)

  const increment = () => {
    dispatch({ type: "INCREMENT" })
    // dispatch({ type: "INCREMENT", payload: { number: 1, username: "JEESUN" } }) //payload is optional
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" })
  };

  const reset = () => {
    dispatch({ type: "RESET" })
  };

  const changeColor = (e) => {
    dispatch({ type: "CHANGE_COLOR", payload: e.target.value })
    console.log("colorInput.e.target.value:", e.target.value)
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      {/* <h2>{username}</h2> */}
      {/* <input type="text" /> */}
      <button onClick={() => increment()} className="buttons">Increment</button>
      <button onClick={() => decrement()} className="buttons">Decrement</button>
      <button onClick={() => reset()} className="buttons">Reset</button>
      <input onChange={(e) => changeColor(e)} className="color-input" placeholder="tell me your favorite color"></input>

{/* 여기부터 */}
      {/* {Array(count).fill(<Box />)} */}

      {state.boxes.length > 0 && state.boxes.map(box => {
        return <Box colorBoxes={box.colorBoxes} id={box.id} colorBox={box.colorBox} colorText={box.colorText} />
      })}
{/* 여기까지 */}

    </div>
  );
}
