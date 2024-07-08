import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=()=>{
        if (text.trim() === "") {
            props.showAlert("Text is empty. Please enter some text.", "danger");
            return;
        }
        console.log("UpperCase was Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick=()=>{
        if (text.trim() === "") {
            props.showAlert("Text is empty. Please enter some text.", "danger");
            return;
        }
        console.log("LowerCase was Clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick = () => {
        if (text.trim() === "") {
            props.showAlert("Text is empty. Please enter some text.", "danger");
            return;
        }
        console.log("Clear Text was Clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleRemoveExtraSpacesClick = () => {
        if (text.trim() === "") {
            props.showAlert("Text is empty. Please enter some text.", "danger");
            return;
        }
        console.log("Remove Extra Spaces was Clicked: " + text);
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Extra Spaces Removed", "success");
    }

    const handleCopyClick = () => {
        if (text.trim() === "") {
            props.showAlert("Text is empty. Please enter some text.", "danger");
            return;
        }
        console.log("Copy Text was Clicked: " + text);
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard", "success");
    }
    const handleReplaceClick = (oldWord, newWord) => {
        if (text.trim() === "") {
            props.showAlert("Text is empty. Please enter some text.", "danger");
            return;
        }
        if (!text.includes(oldWord)) {
            props.showAlert(`Word '${oldWord}' not found in the text.`, "danger");
            return;
        }
        console.log("Replace was Clicked: " + text);
        let newText = text.replace(new RegExp(oldWord, 'g'), newWord);
        setText(newText);
        props.showAlert(`Replaced '${oldWord}' with '${newWord}'`, "success");
    }

    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
       
    }

    const[text, setText]=useState('');
    const [oldWord, setOldWord] = useState("");
    const [newWord, setNewWord] = useState("");
    //setText("Enter text here 2");
  return (
    <>
    
        <div className="conatiner" style={{color: props.mode==='light'?'black':'white'}}>

        
        <h3>{props.heading}</h3>
<div className="mb-3">

<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} id="myBox" rows="5"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} style={{ cursor: 'pointer' }}>Convert to UpperCase</button >   
<button className="btn btn-primary mx-1 my-1"onClick={handleLowClick} style={{ cursor: 'pointer' }}>Convert to LowerCase</button >     
<button className="btn btn-primary mx-1 my-1"onClick={handleClearClick} style={{ cursor: 'pointer' }}>Clear the text</button >  
<button className="btn btn-primary mx-1 my-1"onClick={handleRemoveExtraSpacesClick} style={{ cursor: 'pointer' }}>Remove Extra Space</button > 
<button className="btn btn-primary mx-1 my-1"onClick={handleCopyClick} style={{ cursor: 'pointer' }}>Copy Text</button > 

</div>
<div>
<input className="my-1 mx-1"
                    type="text" 
                    value={oldWord}
                    onChange={(e) => setOldWord(e.target.value)}
                    placeholder="Word to replace"
                />
                <input 
                    type="text" 
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
                    placeholder="New word"
                />
                <button className="btn btn-primary mx-1 my-1"onClick={() => handleReplaceClick(oldWord, newWord)}>Replace Word</button >    
                </div>

    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h4> Your Text Summary </h4>
        <p>{text.split(/\S+/).filter((element)=> {return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.08*text.split(/\S+/).filter((element)=> {return element.length!==0}).length} Minutes to read the text</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter something to Preview it"}</p>


    </div>

    </>
  )
}
