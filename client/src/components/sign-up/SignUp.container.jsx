import { connect } from "react-redux";
import SignUp from "./SignUp.component";
import { signUpStart } from "../../redux/user/user.actions";

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

const SignUpContainer = connect(null, mapDispatchToProps)(SignUp);

export default SignUpContainer;
