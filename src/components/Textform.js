import React from 'react'
import {useState}  from 'react'
function Textform(props) {
    
    const handleonClick=()=>
    {
    //console.log("onchange text"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("show convert to uppercase","success");
    }


    const handlelowClick=()=>
    {
    //console.log("onchange text"+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("show convert to lowercase","success");
    }

    const handleclearClick=()=>
    {
    //console.log("onchange text"+text);
    let newText='';
    setText(newText);
    props.showAlert("clear text","success");
    }





    const handlecopy=()=>
    {
    //console.log("onchange text"+text);
    // var text=document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("show convert to copy","success");
    }


    const handleExtraSpaces=()=>
    {
    //console.log("onchange text"+text);
    var newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("remove extra space","success");
    
    }



    const handleonChange=(event)=>
    {
    //console.log("uppercase change");
    setText(event.target.value);
    }
    const[text,setText]=useState(" ");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 className="mb-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleonClick}>convert the uppercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2  my-2' onClick={handlelowClick}>convert the lowercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleclearClick}>clear text</button>
      <button disabled={text.length===0}  className='btn btn-primary mx-2 my-2' onClick={handlecopy}>convert the Copy of word</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>remove Extra Spaces</button>
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
       <h2>your text summary</h2>
       <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
       <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
       <h2>preview</h2>
       <p>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
      
      </>
  )
}

export default Textform
