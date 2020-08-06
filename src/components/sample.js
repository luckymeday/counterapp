//App.js
{state.boxes.length > 0 && state.boxes.map(box => {
    return <Box colorBoxes={box.colorBoxes} id={box.id} colorBox={box.colorBox} colorText={box.colorText} />
})}

//index.js
const initialState = {
    count: 0,
    // box: {id: ... , colorBoxes: ..., colorBo: ..., colorText: ...}
    boxes: [],
    colorBoxes: 'orange',
    colorBox: 'orange'
};

function countReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            state.count++
            state.boxes.push({ id: state.count, colorBoxes: state.colorBoxes, colorBox: null, colorText: "black" })
            if (state.count >= 3) {
                for (let i = 0; i < state.boxes.length; i++) {
                    state.boxes[i].colorText = "blue"
                }
            }
            break;
        case "DECREMENT":
            state.count--
            state.boxes.pop()
            if (state.count <= 0) state.count = 0
            if (state.count < 3) {
                for (let i = 0; i < state.boxes.length; i++) {
                    state.boxes[i].colorText = "black"
                }
            }
            break;
        case "RESET":
            state.count = 0
            state.boxes = []
            state.colorBoxes = 'orange'
            state.colorBox = 'orange'
            break;
        case "CHANGE_COLOR_BOXES":
            state.colorBoxes = action.payload
            for (let i = 0; i < state.boxes.length; i++) {
                state.boxes[i].colorBoxes = state.colorBoxes
            }
            break;
        case "CHANGE_COLOR_BOX":
            state.colorBox = action.payload.color
            state.boxes[action.payload.id - 1].colorBox = state.colorBox
            break;
        default:
            return state;
    }
    return { ...state }
}

//Box.js
<div className="box" 

style={(colorBox !== null && colorBox !== '') ? 
{ "backgroundColor": colorBox } : { "backgroundColor": colorBoxes }}>

<p style={{ "color": colorText, "fontWeight": "700" }}>Box {id}</p>

<input onChange={(e) => changeColorBox(e.target.value)} placeholder="type color here" />
</div>
