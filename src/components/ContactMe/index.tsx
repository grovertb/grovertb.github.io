import { Grid, Typography, IconButton } from '@mui/material'
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  WhatsApp as WhatsAppIcon,
  Email as EmailIcon,
  Share as ShareIcon,
  Smartphone as SmartphoneIcon
} from '@mui/icons-material'

import Root, { classes } from './styles'

const ContactMe = () => (
  <Root container spacing={4}>
    <Grid item xs={12}>
      <Typography>Contactame</Typography>
    </Grid>
    <Grid
      item
      sm={4}
      xs={12}>
      <div className={classes.title}>
        <EmailIcon />
        <Typography>E-mail</Typography>
      </div>
      <Typography>correo@gmail.com</Typography>
    </Grid>
    <Grid
      item
      sm={4}
      xs={12}>
      <div className={classes.title}>
        <SmartphoneIcon />
        <Typography>Cell phone</Typography>
      </div>
      <div>
        <Typography>+51 934343425</Typography>
      </div>
    </Grid>
    <Grid
      item
      sm={4}
      xs={12}>
      <div className={classes.title}>
        <ShareIcon />
        <Typography>Social</Typography>
      </div>
      <div>
        <IconButton>
          <GitHubIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
        <IconButton>
          <WhatsAppIcon />
        </IconButton>
      </div>
    </Grid>
  </Root>
)

export default ContactMe
