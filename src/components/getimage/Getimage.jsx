import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import PopUp from "../EditProduct/EditPopUp";
import classes from "./Getimage.module.scss";
// import DeleteProduct from "../DeleteProduct/DeleteProduct";

function Getimage() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const config = {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
        
    }
     axios.get("http://localhost:3333/api/posts/user", config).then((res) => {
      setImage(res.data);
    console.log(res)
      
    });
    
  },[]);

  return (
    <>
      <div className={classes["show"]}>
        <div className={classes["background-images"]}>
          {image.map((el) => {
            return (
              <>
                <div>
                  <img src={el.image.url} className={classes["img"]} />
                  <h3>text: {el.text}</h3>
                  <h6>title: {el.title}</h6>
                  {/* <PopUp id={el.id} />
                  <DeleteProduct id={el.id} /> */}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Getimage;