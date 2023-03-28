import React from "react";

import "../Stylesheet/Loader.css";

const Loader = () => {
  return (
    <div className="loader_container">
      <img
        className="loader_image"
        src="https://cdn.dribbble.com/users/115601/screenshots/5356365/loading.gif"
        alt="Loading..."
      />
    </div>
  );
};

export default Loader;
