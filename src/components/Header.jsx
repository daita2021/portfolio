import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    height: 40,
  },
  title: {},
});

export const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Portfolio</h1>
    </header>
  );
};
