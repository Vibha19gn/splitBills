import React from "react";
import PropTypes from "prop-types";

const Footer = () => {
  return (
      <footer className=" container-fluid text-center">
        <span>Copyright @SplitBills</span>
      </footer>
  );
};

Footer.propTypes = {
  show: PropTypes.bool,
};

export default Footer;
