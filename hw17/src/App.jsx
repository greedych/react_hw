import React, { useState } from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { CssBaseline, Typography, Container, Button } from "@mui/material";

const ThemeButton = styled(Button)(({ theme }) => ({
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "8px",
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function App() {
  const [mode, setMode] = useState("light");

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#1976d2", contrastText: "#fff" },
      background: { default: "#f5f5f5", paper: "#fff" },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#90caf9", contrastText: "#000" },
      background: { default: "#121212", paper: "#1d1d1d" },
    },
  });

  const theme = mode === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ textAlign: "center", marginTop: 8 }}>
        <Typography variant="h3" gutterBottom>
          {mode === "light" ? "Light Theme " : "Dark Theme"}
        </Typography>
        <ThemeButton variant="contained" onClick={toggleTheme}>
          toggle Theme
        </ThemeButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;
