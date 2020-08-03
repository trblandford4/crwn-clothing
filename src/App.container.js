import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import App from "./App.component";

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
