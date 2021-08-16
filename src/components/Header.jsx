import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: 40,
    backgroundImage: "linear-gradient(65.5deg, #3dcaca -15%, #2d3077 70%)",
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Portfolio</h1>
    </header>
  );
};
