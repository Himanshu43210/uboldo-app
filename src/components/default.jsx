import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const DefaultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const lastPath = location.pathname.split("/").pop();

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Button
        variant="contained"
        color="primary"
        onClick={handleBackToDashboard}
        sx={{ marginBottom: 2, alignSelf: "center" }}
      >
        Back to Dashboard
      </Button>
      <Typography variant="h2" component="h2">
        {lastPath !== "" ? lastPath : "Not Found"}
      </Typography>
    </Box>
  );
};

export default DefaultPage;
