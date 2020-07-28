import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./Directory.styles.scss";

import MenuItem from "../menu-item/MenuItem.component.jsx";
import { selectDirectorySections } from "../../redux/directory/directory.selectors.js";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
