import React from "react";
import TextLabel from "../../../common/text-label";

const GridCell = (props) => {
  const {
    head,
    content,
    config : {
      headerComponent,
      component,
    } = {}
  } = props;

  const Component = head ? headerComponent : component;

  const renderComponent = () => {
    if(Component) {
      return  <Component
        result={content}
      />
    } else {
      return <TextLabel>{content}</TextLabel>
    }
  }

  return  (
    <div
      className="data-grid-cell">
      {renderComponent()}
    </div>
  )
};

export default GridCell;
