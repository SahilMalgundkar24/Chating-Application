import React from "react";

const Topbar = (props) => {
  return (
    <>
      <div className="h-full w-full flex items-center pl-10 text-lg">

        <div className="h-11 w-11 bg-white rounded-full mr-5">

        </div>

        <div>
        {props.name}
        </div> 
      </div>
    </>
  );
};

export default Topbar;
