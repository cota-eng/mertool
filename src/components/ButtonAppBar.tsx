import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Button href="https://twitter.com/share?ref_src=twsrc%5Etfw">
            <TwitterIcon />
          </Button>
          <Typography variant="h6" className={classes.title}>
            説明文メーカー
          </Typography>

          <Button target="_blank" href="https://github.com/cota-eng/mertool">
            <GitHubIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
