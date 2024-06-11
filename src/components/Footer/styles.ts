import { styled } from '@mui/material'

const PREFIX = 'Footer'

export const classes = {
  toolbar: `${PREFIX}-toolbar`
}

export default styled('footer', {
  name: PREFIX
})((
  // { theme: { spacing } }
) => ({
  [`& .${classes.toolbar}`]: {
    backgroundColor: '#00000030'
  }
}))
