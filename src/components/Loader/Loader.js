import React from "react";
import Spinner from "react-loader-spinner";
const Loader = () => {
  return (
    <div>
      <Spinner
        type="Puff"
        color="#00BFFF"
        height={75}
        width={75}
        timeout={2000}
      />
    </div>
  );
};

export default Loader;
