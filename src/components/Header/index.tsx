import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'

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
    <Container>
      <Typography variant='h4'>Hola, mi nombre es</Typography>
      <Typography color='primary' variant='h3'>[Nombre Completo]</Typography>
      <Typography variant='h4'>Full Stack Developer JS</Typography>
      <Button variant='contained'>Ver CV</Button>
    </Container>
  </>
)

export default Header
