import { Container, Grid, Paper, Typography } from '@mui/material'

const links = [
  'https://cmideas.com.pe',
  'https://www.monnetpayments.com',
  'https://alps.cl',
  'https://www.laborum.pe',
  'https://ochaya.pe',
  'https://naomifranco.com'
]

const Portafolio = () => (
  <Container>
    <Typography variant='h4'>Portafolio</Typography>
    <Grid container spacing={4}>
      {
        links.map((link, index) => (
          <Grid
            item
            key={`link-${index + 1}`}
            md={4}
            sm={6}
            xs={12}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant='body1'>{link}</Typography>
            </Paper>
          </Grid>
        ))
      }
    </Grid>
  </Container>
)

export default Portafolio
