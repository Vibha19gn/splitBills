import React, {Fragment} from "react";
import TextLabel from "../../../common/text-label";

const Row = (props) => {
  const {
    result: {
      addresses,
    } = {}
  } = props;

  if(!addresses) {
    return <noscript/>
  }

  const renderAddress = () => {
    return addresses.map((address) => {
      const {
        address1,
        address2,
        city,
        region,
        country
      } = address || {};
      return (
        <div className="addresses">
          <TextLabel>{address1}</TextLabel>
          <TextLabel>{address2}</TextLabel>
          <TextLabel>{city}</TextLabel>
          <TextLabel>{region}</TextLabel>
          <TextLabel>{country}</TextLabel>
        </div>
      );
    });
  }

  return(
    <Fragment>
      <div>
        <TextLabel
          className="address-title">
          Addresses
        </TextLabel>
      </div>
    <div className="address-container">
      {
        renderAddress()
      }
    </div>
    </Fragment>
  )
};

export default Row;
