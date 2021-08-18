import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[20],
    padding: theme.spacing(4, 4, 4),
    maxWidth: 960,
  },
  articleBox: {
    margin: "0 20 20",
    width: 280,
    height: 250,
    cursor: "pointer",
  },
  articleTitle: {
    marginBottom: 10,
  },
}));

export const Article = (props) => {
  const title = props.title;
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
          <img src={imgUrl} alt="" width={240} height={200} />
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
            <a href={siteUrl} target="_blank" rel="noopener noreferrer">
              <h3>{title}</h3>
              <p id="transition-modal-description">react-transition-group animates me.</p>
              <img src={imgUrl} alt="" />
            </a>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
