import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

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
  </>
)

export default Header
