import { Grid, styled } from '@mui/material'

const PREFIX = 'ContactMe'

export const classes = {
  title: `${PREFIX}-title`
}

export default styled(Grid, {
  name: PREFIX
})((
  // { theme: { spacing } }
) => ({
  [`& .${classes.title}`]: {
    display: 'flex'
  }
}))
