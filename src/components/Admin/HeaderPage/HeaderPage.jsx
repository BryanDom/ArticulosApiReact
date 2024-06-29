import React from "react";
import { Button } from "semantic-ui-react";

export const HeaderPage = (props) => {
  const { title, btnTitle, btnClick, btnTitleTwo, btnClickTwo } = props;

  return (
    <div className="d-flex justify-content-between align-items-center my-4">
      <h2 className="mb-0">{title}</h2>
      <div>
        {btnTitle && (
          <Button positive className="btn btn-success mx-2" onClick={btnClick}>
            {btnTitle}
          </Button>
        )}
        {btnTitleTwo && (
          <Button negative className="btn btn-danger mx-2" onClick={btnClickTwo}>
            {btnTitleTwo}
          </Button>
        )}
      </div>
    </div>
  );
};
