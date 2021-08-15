import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    position: "fixed",
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: 40,
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
