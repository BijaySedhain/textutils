import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("UpperCase was Clicked "+ text)
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = () => {
    // console.log("UpperCase was Clicked "+ text)
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log("OnChange")
  }

const [text, setText] = useState('Enter Text Here');

// setText("New Text");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>  
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Conver to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Conver to LowerCase</button>
    </div>
    <div className="containter my-2">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008* (text.split(" ").length)} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
