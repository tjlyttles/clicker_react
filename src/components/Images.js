import React from "react";
import "../index.css";

const styles = {
  imgStyle: {
    height: "200px",
    width: "200px"
  }
};
export const ImageList = ({ children }) => {
  return <ul className="grid space-around image">{children}</ul>;
};

export const Images = ({ handleClick, image, id }) => {
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-image">
            <li className="image" key={id}>
              <a id={id} href="#!" onClick={() => handleClick(id)}>
                <div>
                  <img style={styles.imgStyle} src={image} alt="blah" />
                </div>
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

