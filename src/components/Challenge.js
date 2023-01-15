import React, { useState } from "react";

// -Add a controlled form that includes:
//      A text input
//      A button with the text of “Click Me!”
//      A paragraph that has a counter that starts at 0
// -When they input text in the text field and submit it, the text input should reset. At the same time the counter should increment based on the word length.
// -The counter will continue to increment based on word length and will never reset back to zero. So for example: if the student typed in hi and submitted 3 times, the counter would be at 6.

/*
    Create a form with an input
    form reset after submit
    have the input save in state
    Hava a counter  save in state
    update counter based on input.length  
*/


function Challenge() {
    const [inputData, setInputData] = useState("");
    const [counter, setCounter] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        setCounter((counter) => counter + inputData.length);
           
        setInputData("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputData}
                onChange={(e)=> setInputData(e.target.value)}
            />
            <button>Click Me!</button>
            <p>Counter: {counter}</p>

        </form>
    )
}

export default Challenge;