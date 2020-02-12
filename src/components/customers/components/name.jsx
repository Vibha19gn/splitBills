import React from "react";
import TextLabel from "../../../common/text-label";

const Name = (props) => {
  console.log("props, Name==", props);
  const {
    result : {
      firstName,
      lastName
    } = {}
  } = props;

  return  (
     <TextLabel>
      {`${firstName} ${lastName}`}
    </TextLabel>
  )
};

export default Name;
