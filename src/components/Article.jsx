import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[20],
    padding: theme.spacing(2, 3, 2),
    maxWidth: 600,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 400,
    },
    "& img": {
      marginBottom: 10,
      boxShadow: "0 0 1px #444",
    },
    "& p": {
      marginBottom: 2,
    },
  },
  articleBox: {
    marginRight: 10,
    marginBottom: 10,
    width: 280,
    height: 250,
    padding: 10,
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      width: 420,
      height: 320,
    },
  },
  articleTitle: {
    marginBottom: 10,
  },
  articleImg: {
    width: 240,
    height: 180,
    boxShadow: "0 0 1px #444",
    [theme.breakpoints.up("md")]: {
      width: 360,
      height: 270,
    },
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "left",
    },
  },
}));

export const Article = (props) => {
  const title = props.title;
  const description = props.description;
  const imgUrl = props.imgUrl;
  const siteUrl = props.siteUrl;

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.articleBox} onClick={handleOpen}>
        <h3 className={classes.articleTitle}>{title}</h3>
        <p>
          <img className={classes.articleImg} src={imgUrl} alt="" />
        </p>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={siteUrl} target="_blank" rel="noopener noreferrer">
              <img src={imgUrl} alt="" />
            </a>
            <div className={classes.btnWrapper}>
              <Button variant="contained" onClick={handleClose} className={classes.closeBtn}>
                Close
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
