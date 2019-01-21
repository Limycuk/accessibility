import React from "react";
import DocumentTitle from "react-document-title";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import { GRID_DATA } from "../../../constants";

const List = ({ classes }) => {
  return (
    <DocumentTitle title="Accessibility">
      <main className={classes.container}>
        <h1>List</h1>
        <GridList cellHeight={180} className={classes.gridList}>
          {GRID_DATA.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton
                    className={classes.icon}
                    aria-label={`Link to detail of ${tile.title}`}
                  >
                    <Icon>info</Icon>
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </main>
    </DocumentTitle>
  );
};

List.propTypes = {};

export default withStyles(styles)(List);
