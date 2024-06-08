import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);
  const[cat,setCat] = useState('');
  const[file,setFile]=useState(null);
  const[title,setTitle]= useState('')
  return (
  <div className="add">
    <div className="content">
      <input type="text" placeholder='Title' onChange={ e=> setTitle(e.target.value)} />
      <div className="editor">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
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
        <input type="file"  id="upload" onChange={e => setFile(e.target.files[0])} />
        <div className="buttons">
          <button>Save as a draft</button>
          <button>Update</button>
        </div>
      </div>
      <div className="item">
        <h1>Category</h1>
        <div className="cat">
          <label htmlFor="politics">Politics</label>
          <input type="radio" name="politics" id="politics" onChange={ e => setCat(e.target.value)} />
        </div>
        <div className="cat">
          <label htmlFor="Entertainment">Entertainment</label>
          <input type="radio" name="" id="Entertainment" onChange={ e => setCat(e.target.value)}  />
        </div>
        <div className="cat">
          <label htmlFor="Economics">Economics</label>
          <input type="radio" name="" id="Economics" onChange={ e => setCat(e.target.value)} />
        </div>
        <div className="cat">
          <label htmlFor="Education">Education</label>
          <input type="radio" name="" id="Education" onChange={ e => setCat(e.target.value)} />
        </div>
        <div className="cat">
          <label htmlFor="politics">Politics</label>
          <input type="radio" name="" id="politics"onChange={ e => setCat(e.target.value)}  />
        </div>
        <div className="cat">
          <label htmlFor="Sports">Sports</label>
          <input type="radio" name="" id="Sports" onChange={ e => setCat(e.target.value)} />
        </div>
        
      </div>
      
    </div>
  </div>
  )
}

export default Write