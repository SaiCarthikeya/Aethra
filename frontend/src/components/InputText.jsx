import React from 'react'
import '../App.css';

function InputText() {
  return (
    <div className='div1'>
      <div className="input-container">
        <h2 className="input-title">Text Translator</h2>
        <textarea
          className="input-textarea"
          placeholder="Enter text to translate..."
        />
        <div className="input-select-group">
          <select className="input-select">
            <option value="">From Language</option>
            <option value="en">English</option>
            <option value="bn">Bengali</option>
            <option value="hi">Hindi</option>
          </select>
          <select className="input-select">
            <option value="">To Language</option>
            <option value="en">English</option>
            <option value="bn">Bengali</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
        <button
          className="input-button"
          type="submit"
        >
          Translate
        </button>
      </div>
    </div>
  )
}

export default InputText
