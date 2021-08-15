import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import GitHubIcon from "@material-ui/icons/GitHub";
import BurstModeIcon from "@material-ui/icons/BurstMode";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: 50,
    margin: "0 auto",
    background: "#efefef",
    opacity: 0.9,
    boxShadow: "0 -1px 2px #ddd",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" />
      <BottomNavigationAction label="Works" icon={<BurstModeIcon />} component={Link} to="/works" />
      <BottomNavigationAction label="About" icon={<ContactMailIcon />} component={Link} to="/about" />
      <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} href="https://github.com/daita2021" target="_blank" rel="noopener noreferrer" />
    </BottomNavigation>
  );
}
