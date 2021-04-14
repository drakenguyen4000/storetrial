// import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { clearMessage } from "../../action/authActions";
// import { clearErrors } from "../../action/errorActions";

const Message = (props) => {
  // const [state, setState] = useState({
  //   display: null,
  // });

  // console.log(props)

  // useEffect(() => {
  //   const { error, message, clearMessage, clearErrors } = props;
  //   //Check for register error
  //   if (error.id === "LOGIN_FAIL") {
  //     setState({ display: error.msg.msg });
  //     setTimeout(() => {
  //       clearErrors();
  //     }, 3000);
  //   } else {
  //     setState({ display: message });
  //     setTimeout(() => {
  //       clearMessage();
  //     }, 3000);
  //   }
  // }, [props]);
  const { message, clearMessage } = props;

  const getStyle = (message) => {
    // const { error, message, clearMessage, clearErrors } = props;
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
  // console.log("message:", state);
  return {
    // error: state.error,
    message: state.msg.msg,
  };
};

export default connect(mapStateToProps, { clearMessage })(Message);
