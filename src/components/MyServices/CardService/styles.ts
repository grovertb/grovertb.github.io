import { Paper, styled } from '@mui/material'

const PREFIX = 'CardService'

export const classes = {
  title: `${PREFIX}-title`
}

export default styled(Paper, {
  name: PREFIX
})((
  { theme: { spacing } }
) => ({
  padding                : spacing(2),
  [`& .${classes.title}`]: {
    fontWeight  : 'bold',
    textAlign   : 'center',
    marginBottom: spacing(2)
  }
}))
