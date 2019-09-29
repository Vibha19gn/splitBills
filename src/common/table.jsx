import React from "react";
import PropTypes from "prop-types";

const Table = (props) => {
  const {
    config : {
      mapping,
      actions
    } = {},
    rows,
    onAction
  } = props;
console.log("props==", props);

  const renderHeader = () => {
     return mapping.map(function(header) {
       return (
         <td>{header.title}</td>
       )
     });
  }

  const renderEachRow = (row) => {
    return mapping.map(function(header) {
      return (
        <td>{row[header.mapped] ? row[header.mapped] : ""}</td>
      )
    });
  }

  const handleOnAction = (id, action) => {
    onAction(id, action);
  }

  const renderRows = () => {
    return rows.map(function(row) {
      return (
        <tr>
          {renderEachRow(row)}
          { actions &&
            <td>
              <button
                onClick= {() => {handleOnAction(row.id, "RETRY")}}>Retry</button>
              <button
                onClick= {() => {handleOnAction(row.id, "DELETE")}}>Delete</button>
            </td>
          }
        </tr>
      )
    });
  }

  return (
    <table>
      <thead>
      <tr>
        {renderHeader()}
      </tr>
      </thead>
      <tbody>
      {renderRows()}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  handleOnSelect : PropTypes.func,
  onAction : PropTypes.func
};

export default Table;
