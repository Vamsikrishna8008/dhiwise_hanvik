import React from "react";

import { Img } from "components";

const SubmittedFormsButton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start p-3.5 w-11">
          <div className="bg-white-A700 flex flex-col h-4 items-start justify-start p-1 w-4">
            <Img
              className="h-2"
              src="images/img_vector_gray_900_02.svg"
              alt="vector"
            />
          </div>
        </div>
      </div>
    </>
  );
};

SubmittedFormsButton.defaultProps = {};

export default SubmittedFormsButton;
