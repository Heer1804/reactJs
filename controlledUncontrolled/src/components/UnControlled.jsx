import React, { useRef } from 'react'

/*
Un-Controlled Components :
1 : form element manages their own internal state instead of react.
2 : Instead of using useState , React's useRef to used to get the input value when needed.

How it works :
1 : Input field maintains its state within the DOM.
2 : React does not track the changes directly.
3 : useRef()
*/

function UnControlled() {

    const inputRef = useRef(null); // useRef to reference input field

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Name : ${inputRef.current.value}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "rgb(200 255 201)" }}>
                <h2 style={{ display: "block", color: "black", marginBottom: "10px", fontWeight: "bold" }}>
                    Name
                </h2>
                <input type="text" ref={inputRef} style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "10px", width: "80%" }} />

                <button type="submit" style={{ padding: "8px 16px", backgroundColor: "rgb(0 255 144)", color: "black", border: "none", borderRadius: "4px", cursor: "pointer" }}>Submit</button>
            </form>
        </div>
    )
}

export default UnControlled
