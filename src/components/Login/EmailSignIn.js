import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emailSignIn } from "../../features/Auth/authSlice";

const emails = ["akhilpappu8@gmail.com", "akhileee.16@gmail.com"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((globalState) => globalState.authSlice.isAuthenticated);


  const [confirmSignInOpen, setConfirmSignInOpen] = React.useState(false);

  const handleListItemClick = (value) => {
    onClose(value);
    setConfirmSignInOpen(true);
  };

  const handleConfirmClose = () => {
    setConfirmSignInOpen(false);
  };

  const navigateToDashboard = () => {
    setConfirmSignInOpen(false);    
    dispatch(emailSignIn({email: selectedValue}))
  }

    useEffect(() => {
        if(isAuthenticated){
            navigate("/dashboard")
        } 
    }, [isAuthenticated])

    
  return (
    <React.Fragment>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Sign In with</DialogTitle>
        <List sx={{ pt: 0 }}>
          {emails.map((email) => (
            <ListItem disablePadding key={email}>
              <ListItemButton onClick={() => handleListItemClick(email)} >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              autoFocus
              onClick={() => handleListItemClick("addAccount")}
            >
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Add account" />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>

      <Dialog
        open={confirmSignInOpen}
        keepMounted
        onClose={handleConfirmClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmClose}>Disagree</Button>
          <Button onClick={navigateToDashboard}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function EmailSignIn() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="h6" noWrap>
        {selectedValue}
      </Typography>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign In Using Email
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
