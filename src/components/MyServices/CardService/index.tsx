import { Typography } from '@mui/material'

import Root, { classes } from './styles'

interface CardServiceProps {
  title: string;
  description: string;
}

const CardService = ({ title, description }: CardServiceProps) => (
  <Root>
    <Typography className={classes.title}>{title}</Typography>
    <Typography>{description}</Typography>
  </Root>
)

export default CardService
