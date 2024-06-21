import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const Write = () => {
  const state = useLocation().state;
  const navigate = useNavigate();

  const [value, setValue] = useState(state ? state.description : "");
  const [cat, setCat] = useState(state ? state.cat : "");
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(state ? state.title : "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("http://localhost:8800/app/upload", formData, {
        withCredentials: true
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  const handleClick = async (event) => {
    event.preventDefault();

    if (!title || !value || !cat) {
      alert("Please fill in all fields.");
      return;
    }

    const imgUrl = file ? await upload() : "";

    try {
      const postData = {
        title,
        description: value,
        cat,
        img: imgUrl || "",
        date: moment().format('YYYY-MM-DD HH:mm:ss')
      };

      const config = {
        headers: {
          'Authorization': `${localStorage.getItem("AccessToken")}`
        },
        withCredentials: true
      };

      if (state && state.id) {
        await axios.put(`http://localhost:8800/app/posts/${state.id}`, postData, config);
      } else {
        await axios.post("http://localhost:8800/app/posts", postData, config);
      }

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="add">
      <div className="content">
        <input 
          type="text" 
          placeholder='Title' 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
        />
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
            <b>Visibility: Public</b>
          </span>
          <label htmlFor="upload">Upload Image</label>
          <input 
            type="file"  
            id="upload" 
            onChange={e => setFile(e.target.files[0])} 
          />
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>{state ? "update": "post"}</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <label htmlFor="politics">Politics</label>
            <input 
              type="radio" 
              name="cat" 
              id="politics" 
              checked={cat === "politics"} 
              value="politics" 
              onChange={e => setCat(e.target.value)} 
            />
          </div>
          <div className="cat">
            <label htmlFor="entertainment">Entertainment</label>
            <input 
              type="radio" 
              name="cat" 
              id="entertainment" 
              checked={cat === "entertainment"} 
              value="entertainment" 
              onChange={e => setCat(e.target.value)} 
            />
          </div>
          <div className="cat">
            <label htmlFor="economics">Economics</label>
            <input 
              type="radio" 
              name="cat" 
              id="economics" 
              checked={cat === "economics"} 
              value="economics" 
              onChange={e => setCat(e.target.value)} 
            />
          </div>
          <div className="cat">
            <label htmlFor="education">Education</label>
            <input 
              type="radio" 
              name="cat" 
              id="education" 
              checked={cat === "education"} 
              value="education" 
              onChange={e => setCat(e.target.value)} 
            />
          </div>
          <div className="cat">
            <label htmlFor="sports">Sports</label>
            <input 
              type="radio" 
              name="cat" 
              id="sports" 
              checked={cat === "sports"} 
              value="sports" 
              onChange={e => setCat(e.target.value)} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
