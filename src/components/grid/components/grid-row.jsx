import React, {Component} from "react";
import Proptypes from "prop-types";
import GridCell from "./grid-cell";

class GridRow extends Component {

  constructor(props) {
    super(props);
    this.onRowClick = this.onRowClick.bind(this);
    this.state = {
      show: false
    }
  }

  onRowClick() {
    const {
      show
    } = this.state;
    this.setState({show: !show});
  }

  renderEachRowCell(row, columns) {
    return columns.map(function (column, index) {
      return (
        <GridCell
          key={`row-cell-${index}`}
          content={row[column.field]}
          config={column}
        />
      )
    });
  };

  render() {
    const {
      row,
      columns,
      rowComponent: RowComponent
    } = this.props || {};
    const {
      show
    } = this.state;
    return (
      <div
        onClick={this.onRowClick}
        className="data-grid-row grid-flex"
      >
        {this.renderEachRowCell(row, columns)}
        {
          show && RowComponent &&
            <div
              className="data-grid-row-sub-section">
            <RowComponent
              result={row}/>
            </div>
        }
      </div>
    )
  }

}


GridRow.proptypes = {
  "results": Proptypes.array
};

export default GridRow;
