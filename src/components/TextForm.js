import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("UpperCase was Clicked "+ text)
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log("OnChange")
  }

const [text, setText] = useState('Enter Text Here');

// setText("New Text");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>  
        <button className="btn btn-primary" onClick={handleUpClick}>Conver to UpperCase</button>
    </div>
  )
}
