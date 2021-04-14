// //client/src/compnonents/ItemModal.js
// import React, { Component } from "react";
// import {
//   Button,
//   Modal,
//   ModalBody,
//   ModalHeader,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   NavLink,
//   Alert,
// } from "reactstrap";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { login } from "../../action/authActions";
// import { clearErrors } from "../../action/errorActions";

// class LoginModal extends Component {
//   state = {
//     modal: false,
//     name: "",
//     password: "",
//     msg: null,
//   };

//   static propTypes = {
//     isAuthenticated: PropTypes.bool,
//     error: PropTypes.object.isRequired,
//     login: PropTypes.func.isRequired,
//     clearErrors: PropTypes.func.isRequired,
//   };

//   componentDidUpdate(prevProps) {
//     const { error, isAuthenticated } = this.props;
//     if (error !== prevProps.error) {
//       //Check for register error
//       if (error.id === "LOGIN_FAIL") {
//         this.setState({ msg: error.msg.msg });
//       } else {
//         this.setState({ msg: null });
//       }
//     }
//     //If authenticated close modal
//     if (this.state.modal) {
//       if (isAuthenticated) {
//         this.toggle();
//       }
//     }
//   }

//   toggle = () => {
//     // this.props.clearErrors();
//     this.setState({
//       modal: !this.state.modal,
//     });
//   };
//   //When use clicks on button, pass info as "e" and set state with...
//   //target the name attribute
//   //target value attribute
//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onSubmit = (e) => {
//     //prevent form from submitting
//     e.preventDefault();
//     const { name, password } = this.state;
//     const user = {
//       name,
//       password,
//     };
//     this.props.login(user);
//   };

//   render() {
//     return (
//       <div>
//         <NavLink
//           color="dark"
//           style={{ marginBottom: "2rem" }}
//           href="#"
//           onClick={this.toggle}
//         >
//           Login
//         </NavLink>
//         <Modal isOpen={this.state.modal} toggle={this.toggle}>
//           <ModalHeader toogle={this.toggle}>Login</ModalHeader>
//           <ModalBody>
//             {this.state.msg ? (
//               <Alert color="danger">{this.state.msg}</Alert>
//             ) : null}
//             <Form onSubmit={this.onSubmit}>
//               <FormGroup>
//                 <Label for="name">Name</Label>
//                 <Input
//                   type="text"
//                   name="name"
//                   id="name"
//                   placeholder="Name"
//                   onChange={this.onChange}
//                   className="mb-3"
//                 />
//                 <Label for="password">Password</Label>
//                 <Input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="Password"
//                   onChange={this.onChange}
//                   className="mb-3"
//                 />
//                 <Button color="dark" style={{ marginTop: "2rem" }} block>
//                   Login
//                 </Button>
//               </FormGroup>
//             </Form>
//           </ModalBody>
//         </Modal>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   error: state.error,
// });

// export default connect(mapStateToProps, { login, clearErrors })(LoginModal);
