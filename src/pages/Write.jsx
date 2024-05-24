import { useState } from 'react';
import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div className='write'>
      <div className="content-2">
    
        <input type="text"  placeholder='Title:'/>
     
      <div className="space-write">
      <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} placeholder='...Vocal your thoughts!'/>;
      </div>
    </div>
    <div className="menu">
      <div className="item-1"><h1>Publish</h1>
                        <input type="file"  placeholder='Uplaod image'  id='Upload'/>
                        <label htmlFor="Upload">Upload</label>
                        <button>Publish</button>
      </div>
      <hr />
      <div className="item-2">
        <h1>Category</h1>
        <div className="cat">
          <label htmlFor="politics">Politics</label>
          <input type="radio" id='Economy' name='Economy' value="Economy" />
          </div>  
          <div className="cat">
          <label htmlFor="Economy">Economy</label>
          <input type="radio" id='Entertainment' name='Entertainment' value="Entertainment" />
          </div>    
          <div className="cat">
          <label htmlFor="Entertainment">Entertainment</label>
          <input type="radio" id='Entertainment' name='Entertainment' value="Entertainment" />
          </div>
          <div className="cat">
          <label htmlFor="Environment">Environment</label>
          <input type="radio" id='Environment' name='Environment' value="Environment" />
          </div>
          <div className="cat">
          <label htmlFor="Foreign affairs">Foreign affairs</label>
          <input type="radio" id='Foreign affairs' name='Foreign affairs' value="Foreign affairs" />
    </div>
    <div className="cat">
          <label htmlFor="sports">Sports</label>
          <input type="radio" id='Sports' name='Sports' value="Sports" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Write