import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from '@mui/material'

const navItems = [ 'Home', 'About', 'Contact' ]

const Header = () => (
  <>
    <AppBar
      color='transparent'
      elevation={0}
      position='static'>
      <Toolbar>
        <Typography
          component='div'
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          variant='h6'>
          Nombre
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
    <Container sx={{ height: '90vh', display: 'flex', alignItems: 'center' }}>
      <Grid container>
        <Grid
          item md={6}
          xs={12}>
          <Box sx={{ padding: '20px' }}>
            <Typography variant='h4'>Hola, mi nombre es</Typography>
            <Typography
              color='primary'
              sx={{ marginTop: '35px' }}
              variant='h3'>
              [Nombre Completo]
            </Typography>
            <Typography
              sx={{ marginTop: '20px' }}
              variant='h4'>
              Full Stack Developer JS
            </Typography>
            <Button sx={{ marginTop: '40px' }} variant='contained'>Ver CV</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </>
)

export default Header
