import React from 'react';
// import SmallBox from "./SmallBox";
import { useSelector, useDispatch, } from 'react-redux';

export default function Box({ id }) {
    // const count = useSelector((state) => state.count);
    const colorBoxes = useSelector((state) => state.color);
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const singleColor = useSelector(state => state.boxes[id].colorBox)
    console.log('singleColor:', singleColor)
    console.log('colorBoxes:', colorBoxes)

    const changeOneBox = (e) => {
        dispatch({ type: "CHANGE_ONE_BOX", payload: { id: id, color: e.target.value } })
        console.log("colorInput.e.target.value:", e.target.value)
        // dispatch({ type: "INCREMENT", payload: { number: 1, username: "JEESUN" } }) //payload is optional
    };

    return (
        <div className="middle">
            <div className="each-box"

                //    style={{ "backgroundColor": singleColor ? singleColor : colorBoxes }}>

                // style={{ "backgroundColor": colorBoxes }} >

                // style={(colorBoxes !== null && colorBoxes !== '') ?
                //     { "backgroundColor": colorBoxes } : { "backgroundColor": colorBoxes }} >
                style={(singleColor !== null && singleColor !== '') ?
                    { "backgroundColor": singleColor } : { "backgroundColor": colorBoxes }} >


                Colorful Box
            <input onChange={(e) => changeOneBox(e)} className="one-color-input" placeholder="tell me your favorite color"></input>
            </div>
            {/* {count} <SmallBox /> */}
        </div>
    )
}
