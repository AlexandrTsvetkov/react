import { Box, Container, Grid, Typography } from "@mui/material";

const Info = () => {
  return (
    <Container maxWidth="xs" sx={{ marginTop: 30 }}>
      <Typography align="center" fontSize={40}>
        Ještě nemáte účet
      </Typography>
      <Typography sx={{ marginTop: 5 }} align="center">
        Tady bychom měli aspoň rámcově popsat celý systém Autset. Vyzdvihnout
        hlavní moduly a popsat přínosy, které to pro zákazníka může mít.
      </Typography>

      {Array.from(Array(3)).map((_, index) => (
        <Box sx={{ marginTop: 5 }} key={index}>
          <Grid container spacing={1}>
            <Grid item md="auto">
              <img src="Vector.png"></img>
            </Grid>
            <Grid item md>
              <Typography fontSize={15}>
                Těžba elektronických dodacích listů
              </Typography>
              <Typography fontSize={13} color="#AFCCE2">
                Tady bychom měli popsat konkrétní modul, jeho hlavní specifika a
                to, k čemu ho zákazník může využít.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default Info;
