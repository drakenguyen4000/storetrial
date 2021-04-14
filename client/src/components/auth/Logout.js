import { connect } from "react-redux";
import { logout } from "../../action/authActions";
import { Link } from "react-router-dom";

const Logout = (props) => {
  return (
    <>
      <Link onClick={props.logout} href="#">
        Logout
      </Link>
    </>
  );
};

export default connect(null, { logout })(Logout);