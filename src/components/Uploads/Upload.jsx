import { useState } from "react";
import axios from "axios";
import classes from "./Upload.module.scss";
import { useNavigate } from "react-router-dom";
import Getimage from "../getimage/Getimage";

import LogoutButton from "../logoute/Logoute";


const Upload = () => {
  const [image, setimage] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [imageSrc, setImageSrc] = useState('');

  // const navigate = useNavigate()
  function handleimage(e) {
    const file = e.target.files[0];
    setimage(file);
    setImageSrc(URL.createObjectURL(file));
  
  }
  function handlesrc () {
    
  }
  function handleName(e) {
    setText(e.target.value);
  }
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleAPI() {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    };
 
    const formData = new FormData();
    formData.append("image", image);
    formData.append("text", text);
    formData.append("title", title);
    axios.post("http://localhost:3333/api/posts", formData, config);

    // navigate('/getimage')
    setTimeout(() => {
      window.location.reload(true);
    }, 1500);
  }
  const clearImage = () =>{
    setimage("")
  }
  return (
    <>
      <div className={classes["upload-display"]}>
        <div className={classes["logoute"]}>
        <LogoutButton key={Math.random()} />
        </div>
      {imageSrc  && <img src={imageSrc} alt="Uploaded Image" />}
      <div className={classes["upload-image-display"]}>
        <h3>Upload And Attch Files</h3>
        <label for="inputTag">
          <input
            className={classes["upload_image"]}
            id="inputTag"
            type="file"
            name="file"
            onChange={handleimage}
          />
        </label>

        <label>
          <input
            className={classes["input-Title"]}
            id="inputTitle"
            type="text"
            name="title"
            placeholder="type title..."
            onChange={handleTitle}
          />
        </label>
        <input
          placeholder="Product Name..."
          type="text"
          name="name"
          onChange={handleName}
          className={classes["input-name"]}
        />
        <button className={classes["submit"]} onClick={handleAPI}>
          submit
        </button>
        <button onClick={clearImage} className={classes["clear"]}>Clear</button>
      </div>
      </div>
      <div className={classes["image-get-display"]}>{<Getimage />}</div>

    </>
  );
};

export default Upload;
