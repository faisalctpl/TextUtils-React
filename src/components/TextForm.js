import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
     let newText = text.toUpperCase();  
     setText(newText)
     props.showAlert('Converted to UperCase', 'success')
     
    }
    const handleOnChange = (event) => {
      console.log("On change");   
      setText(event.target.value)
    }
    const handleLoClick = () => {
      
      let newText = text.toLowerCase();  
      setText(newText)
      props.showAlert('Converted to LowerCase', 'success')
    }
    const handleClearText = () => {
      let newText = '';  
      setText(newText)
      props.showAlert('Text has been Cleared', 'success')
    }
    const handleCopyText = () => {
      var text = document.getElementById('mybox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Text has been Copyed', 'success')
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert('Extra Space Remove', 'success')
    }
    // text = "new text" wrong way
    // setText("New text"); correct way
  return (
      <> 
      <div style={{color:props.mode==='dark'?'white':'black'}}>

   <h1>{props.heading} </h1>
<div className="mb-3">
  <label htmlfor="mybox" className="form-label"></label>
  <textarea className="form-control" style={{backgroundColor:props.mode ==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="mybox" value={text} rows="8"></textarea>
  <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upercase</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
</div>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} charactors</p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter somthing in the text box above to preview here"}</p>
    </div>
        </>
  );
}
