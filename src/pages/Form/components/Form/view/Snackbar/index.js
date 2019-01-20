import React from "react";

import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const ResultSnackbar = ({ classes, isOpen }) => {
  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{
        horizontal: "right",
        vertical: "top"
      }}
      ContentProps={{
        classes: {
          root: classes.success
        }
      }}
      message={<span className={classes.message}>Success</span>}
    />
  );
};

export default withStyles(styles)(ResultSnackbar);
