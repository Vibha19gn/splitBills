import React, {Fragment} from "react";
import GridCell from "./components/grid-cell";
import GridRow from "./components/grid-row";

const Grid = (props) => {
  const {
    columns,
    rows,
    uniqueId,
    rowComponent
  } = props;

  if (!columns.length || !rows.length) {
    return <noscript/>;
  }

  const renderHeader = () => {
    return columns.map((column, index) => {
      return (<GridCell
        key={`head-cell-${index}`}
        content={column.name}
        config={column}
        head={true}
      />);
    });
  }

  const renderRows = () => {
    return rows.map(function (row, index) {
      return <GridRow
        key={`row-${index}`}
        row={row}
        columns={columns}
        rowComponent={rowComponent}
      />
    });
  }

  return (
    <div
      className="data-grid"
      id={uniqueId}>
      <div className="data-grid-header grid-flex">
        {
          renderHeader()
        }
      </div>
      <div className="data-grid-rows">
        {
          renderRows()
        }
      </div>
    </div>
  )
}

export default Grid;
