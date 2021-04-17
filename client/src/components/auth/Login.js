//login.js
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { login } from "../../action/authActions";
import { clearErrors } from "../../action/errorActions";

import { useState } from "react";

const Login = (props) => {   
  const [state, setState] = useState({
    name: "",
    password: "",
  });

  const onConsole = () => {
    console.log(props.tempMsg)
  }

  //When use clicks on button, pass info as "e" and set state with...
  //target the name attribute
  //target value attribute
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, password } = state;
    const user = {
      name,
      password,
    };
    props.login(user);
  };
  return (
    <div style={{ height: "400px" }}>
      <button onClick={onConsole}>Console Log</button>
      <Form style={{ height: "400px" }} onSubmit={onSubmit}>
        <FormGroup style={{ marginTop: "8%", margin: "auto", width: "50%" }}>
          <h2 style={{ textAlign: "center" }}>Please Login</h2>
          <Label for="name">Username</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Username"
            onChange={handleChange}
            value={state.name}
            className="mb-3"
          />
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            value={state.password}
            className="mb-3"
          />
          <Button className="submit-btn" color="dark">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  tempMsg: state, //What to do with Clear Error action?>>
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
