import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleSenClick = () => {
    let newText = text.toLowerCase().charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
  }

  const handleTitleClick = () => {
    let words = text.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    setText(words.join(' '));
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  
  }


const [text, setText] = useState('');

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>  
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Conver to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Conver to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleSenClick}>Convert to Sentence Case</button>
        <button className="btn btn-primary mx-1" onClick={handleTitleClick}>Convert to Title Case</button>
    </div>
    <div className="containter my-2">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008* (text.split(" ").length)} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
