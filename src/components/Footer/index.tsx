import { Toolbar, Typography } from '@mui/material'

import Root, { classes } from './styles'

const Footer = () => (
  <Root>
    <Typography>Footer</Typography>
    <Toolbar className={classes.toolbar} variant='dense'>
      <Typography variant='body2'>© 2024 [Nombre] Todos los derechos reservados.</Typography>
    </Toolbar>
  </Root>
)

export default Footer
