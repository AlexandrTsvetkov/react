import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Info from "./Info";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item md={6}>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <img src="/Logo.png" width={149}></img>
            </Box>
            <Box
              sx={{
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <Typography component="h1" variant="h5">
                Přihlaste se
              </Typography>
              <LoginForm></LoginForm>

              <Divider sx={{ marginTop: 3 }}>Nebo se přihlaste přes</Divider>
              <Stack spacing={2} sx={{ marginTop: 3 }} direction="row">
                <Button size="large" fullWidth variant="outlined">
                  Google
                </Button>
                <Button size="large" fullWidth variant="outlined">
                  Facebook
                </Button>
              </Stack>
            </Box>
          </Container>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            height: "100vh",
            backgroundColor: "#1265A7",
            color: "white",
          }}
        >
          <Info></Info>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default LoginPage;
