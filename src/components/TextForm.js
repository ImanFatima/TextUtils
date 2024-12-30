import React, {useState} from 'react'
import nlp from 'compromise'
import PropTypes from 'prop-types';



export default function TextForm(props) {
    const [text, setText] = useState('')
    const [ tags, setTags] = useState([])
    const [previewText, setPreviewText] = useState(''); // State for preview text

    const clearText= ()=>{
        console.log("Clear text button clicked!")
        let newText = '';
        setText(newText)
        setPreviewText('Clear Text');

    }

    const handleUpCase= ()=>{
        console.log("uppper case button clicked!")
        let newText =  text.toLocaleUpperCase();
        setText(newText)
        setPreviewText('Upper Case');

    }
    // handleLoCase
    const handleLoCase= ()=>{
        console.log("uppper case button clicked!")
        let newText =  text.toLocaleLowerCase();
        setText(newText)
        setPreviewText('Lower Case');

    }

    const handleOnChane = (event)=>{
        console.log("On change!")
        setText(event.target.value)
        setPreviewText(''); 
    }

      // Analyze POS Tags
    const handlePosTagging = () => {
        const doc = nlp(text); // Process text with compromise
        const words = doc.terms().out('array'); // Extract words
        const results = words.map((word) => {
            const term = nlp(word);
            // Identify POS tags
            if (term.nouns().length) return { word, pos: 'Noun' };
            // if (term.verbs().length) return { word, pos: 'Verb' };
            // if (term.adjectives().length) return { word, pos: 'Adjective' };
            // return { word, pos: 'Other' };
            return null;
        }).filter((result) => result !== null);
        setTags(results); // Update POS tags in state
    };
   
    return (
        <>
    <div className='container mt-2'>
        {/* <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div> */}
        <div className="mb-3">
         {/* <label  className="form-label"> Text Area</label> */}
         <textarea className="form-control mb-4" value={text} onChange={handleOnChane} style={{ backgroundColor: props.mode ==='light' ? 'white' : 'grey', color: props.mode ==='light' ? 'black' : 'white' }} id="myBox" rows="8" ></textarea>
         <button className="btn btn-primary mx-3" onClick={handleUpCase}> Convert to UpperCase</button>
         <button className="btn btn-primary mx-3" onClick={handleLoCase}> Convert to LowerCase</button>
         <button className="btn btn-success mx-3" onClick={handlePosTagging}> Analyze POS Tags </button>
         <button className="btn btn-warning mx-3" onClick={clearText}> Clear Text </button>

        </div>
    </div>
    <div className="container my-2" >
        <h1 style={{ color: props.mode ==='light' ? 'black' : 'white' }}> your text summary</h1>
        <p style={{ color: props.mode ==='light' ? 'black' : 'yellow' }}> {text === '' ? text.split(" ").length - 1 : text.split(" ").length} words and {text.length} characters</p>
        <h2 style={{ color: props.mode ==='light' ? 'black' : 'white' }}> Preview {previewText} </h2>
        <p style={{ color: props.mode ==='light' ? 'black' : 'yellow' }} >{text}</p>
    </div>
    <div className="container my-2" >
        <h2 style={{ color: props.mode ==='light' ? 'black' : 'white' }}>Nouns Tagging Results</h2>
        <ul style={{ color: props.mode ==='light' ? 'black' : 'yellow' }}>
            {tags.map((tag, index) => (
                <li key={index}>
                    <strong>{tag.word}</strong>: {tag.pos}
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}
