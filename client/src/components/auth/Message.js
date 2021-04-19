import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { clearMessage } from "../../action/authActions";

const Message = (props) => {
  const { message, clearMessage } = props;
  const getStyle = (message) => {
    let msgFlash = null;
    if (message === "Payment success!") {
      msgFlash = "success";
    } else {
      msgFlash = "danger";
    }
    setTimeout(() => {
      clearMessage();
    }, 3000);
    return msgFlash;
  };

  return (
    <div>
      {message ? <Alert color={getStyle(message)}>{message}</Alert> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.msg.msg,
  };
};

export default connect(mapStateToProps, { clearMessage })(Message);
