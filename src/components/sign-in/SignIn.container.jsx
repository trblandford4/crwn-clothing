import { connect } from "react-redux";

import SignIn from "./SignIn.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

const SignInContainer = connect(null, mapDispatchToProps)(SignIn);

export default SignInContainer;
