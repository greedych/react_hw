import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            My Material UI App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to my app!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Open Dialog
        </Button>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Hi!</DialogTitle>
        <DialogContent>
          <DialogContentText>Click by close</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
