import React ,{useState} from 'react'


export default function Textform(props) {
    const [text, setText] = useState("");
    const handleUpClick = ()=> {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase" ,"success")
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase" ,"success")
    }
    
    const handleClear = ()=>{
        setText("")
        props.showAlert("Text Cleared" ,"success")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    let word = text.split(" ")
    
    
  return (
    <>
    <div className='container my-5' style={{color:props.mode ==='dark'?'white':'black'}}>
        <h1 className='text-center my-3'>Enter The Text Here To Analyze</h1>
        <textarea className="form-control" style={{backgroundColor: props.mode ==='dark'?'#7599ba':'white' ,color:props.mode ==='dark'?'white':'black'}} id="myBox" value={text} onChange={handleOnChange} rows="8" placeholder='Enter Text Here'></textarea>
        <button type="submit" className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert in Upper</button>
        <button type="submit" className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert in Lower</button>
        <button type="submit" className="btn btn-primary my-1 mx-1" onClick={handleClear}>Clear</button>
    </div>
    <div className='container my-2' style={{color:props.mode ==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{word.slice(1,).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text ===""?"Enter Text in the Textbox to preview" : text}</p>
    </div>
    </>
  )
}
