import { connect } from "react-redux";
import Spinner from "./spinner";

const mapStateToProps = (state) => {
  return {
    show: state.spinner.status
  };
};

export default connect(
  mapStateToProps
)(Spinner);
