import React, { useState } from 'react';
import nlp from 'compromise';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);
  const [previewText, setPreviewText] = useState(''); // State for preview text

  const clearText = () => {
    console.log("Clear text button clicked!");
    let newText = '';
    setText(newText);
    setPreviewText('Clear Text');
  };

  const handleUpCase = () => {
    console.log("Upper case button clicked!");
    let newText = text.toLocaleUpperCase();
    setText(newText);
    setPreviewText('Upper Case');
  };

  const handleLoCase = () => {
    console.log("Lower case button clicked!");
    let newText = text.toLocaleLowerCase();
    setText(newText);
    setPreviewText('Lower Case');
  };

  const handleOnChane = (event) => {
    console.log("On change!");
    setText(event.target.value);
    setPreviewText('');
  };

  // Analyze POS Tags
  const handlePosTagging = () => {
    const doc = nlp(text); // Process text with compromise
    const words = doc.terms().out('array'); // Extract words
    const results = words.map((word) => {
      const term = nlp(word);
      // Identify POS tags
      if (term.nouns().length) return { word, pos: 'Noun' };
      return null;
    }).filter((result) => result !== null);
    setTags(results); // Update POS tags in state
  };

  return (
    <>
      <div className="container mt-2">
        <div className="mb-3">
          <textarea className="form-control mb-4" value={text} onChange={handleOnChane}
            style={{
              backgroundColor: props.bgColor || 'white', // Use bgColor passed from App.js
              color: (props.bgColor === '#022348' || props.bgColor === '#301541') ? 'white' : 'black'
            }}
            id="myBox"rows="8" ></textarea>

          <button className="btn btn-primary mx-3" onClick={handleUpCase}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-3" onClick={handleLoCase}>Convert to LowerCase</button>
          <button className="btn btn-success mx-3" onClick={handlePosTagging}>Analyze POS Tags</button>
          <button className="btn btn-warning mx-3" onClick={clearText}>Clear Text</button>
        </div>
      </div>

      <div className="container my-2">
        <h1 style={{color: (props.bgColor === '#022348' || props.bgColor === '#301541') ? 'white' : 'black' }}>
            Your text summary</h1>
        <p style={{color: (props.bgColor === '#022348' || props.bgColor === '#301541') ? 'yellow' :  props.bgColor ==='white' ? 'grey' : 'white' }}>
            {text === '' ? text.split(" ").length - 1 : text.split(" ").length} words and {text.length} characters</p>
        <h2 style={{color: (props.bgColor === '#022348' || props.bgColor === '#301541') ? 'white' : 'black' }}>
            Preview {previewText}</h2>
        <p style={{color: (props.bgColor === '#022348' || props.bgColor === '#301541') ? 'yellow' : props.bgColor ==='white' ? 'grey' : 'white' }}>
            {text}</p>
      </div>

      <div className="container my-2">
        <h2 style={{color: (props.bgColor === '#022348' || props.bgColor === '#301541') ? 'white' : 'black' }}>
            Nouns Tagging Results</h2>
        <ul style={{color: (props.bgColor === '#022348' || props.bgColor === '#301541') ? 'yellow' : props.bgColor ==='white' ? 'grey' : 'white' }}>
          {tags.map((tag, index) => (
            <li key={index}>
              <strong>{tag.word}</strong>: {tag.pos}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
