import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
  <div className="add">
    <div className="content">
      <input type="text" placeholder='Title' />
      <div className="editor">
      <ReactQuill theme="snow" value={value} onChange={setValue} />;
      </div>
    </div>
    <div className="menu">
      <div className="item">
        <h1>Publish</h1>
        <span>
          <b>Status: Draft</b>
        </span>
       

        <span>
          <b>Visibility:Public</b>
        </span>
        <label htmlFor="upload">Upload Image</label>
        <input type="file"  id="upload" />
        <div className="buttons">
          <button>Save as a draft</button>
          <button>Update</button>
        </div>
      </div>
      <div className="item">
        <h1>Category</h1>
        <div className="cat">
          <label htmlFor="politics">Politics</label>
          <input type="radio" name="politics" id="politics" />
        </div>
        <div className="cat">
          <label htmlFor="politics">Politics</label>
          <input type="radio" name="" id="politics" />
        </div>
        <div className="cat">
          <label htmlFor="politics">Politics</label>
          <input type="radio" name="" id="politics" />
        </div>
        <div className="cat">
          <label htmlFor="politics">Politics</label>
          <input type="radio" name="" id="politics" />
        </div>
        <div className="cat">
          <label htmlFor="politics">Politics</label>
          <input type="radio" name="" id="politics" />
        </div>
        <div className="cat">
          <label htmlFor="politics">Politics</label>
          <input type="radio" name="" id="politics" />
        </div>
        <div className="cat">
          <label htmlFor="politics">Politics</label>
          <input type="radio" name="" id="politics" />
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default Write