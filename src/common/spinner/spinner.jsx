import React from 'react';

const Spinner = (props) => {
  const {
    show
  } = props;

    return (
      <div className={`spinner ${show || "hideSpinner"}`}>
        <i className="fas fa-spinner"></i>
      </div>
    );
}

export default Spinner;
