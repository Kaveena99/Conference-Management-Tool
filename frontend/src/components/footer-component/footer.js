import React from "react";
//import "../../css/mystyles.css";
import image from "../../img/images.png";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import BottomNavigation from "@material-ui/core/BottomNavigation";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div position="static" style={{ backgroundColor: "#212529" }}>
      <Toolbar>
        <Typography
          variant="h6"
          style={{ marginTop: "1rem", marginLeft: "25rem", color: "aliceblue" }}
        >
          <center>
            @ICAF.com <i>All Rights Reserved Copyright 2021</i>
          </center>
        </Typography>
      </Toolbar>
    </div>
  );
}

export default Footer;
