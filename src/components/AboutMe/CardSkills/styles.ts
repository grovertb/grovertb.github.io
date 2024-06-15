import { styled } from '@mui/material'

const PREFIX = 'CardSkills'

export default styled('div', {
  name: PREFIX
})(() => ({
  display       : 'flex',
  justifyContent: 'space-around',
  flexWrap      : 'wrap'
}))
