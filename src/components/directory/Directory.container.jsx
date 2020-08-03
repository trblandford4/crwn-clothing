import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors.js";
import Directory from "./Directory.component.jsx";

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

const DirectoryContainer = connect(mapStateToProps)(Directory);

export default DirectoryContainer;
