import { Paper, styled } from '@mui/material'

const PREFIX = 'SkillCard'

export const classes = {
  root    : `${PREFIX}-root`,
  progress: `${PREFIX}-progress`,
  title   : `${PREFIX}-title`
}

export default styled(Paper, {
  name: PREFIX
})(({ theme: { spacing, palette, shape } }) => ({
  padding                : spacing(2),
  textAlign              : 'center',
  color                  : palette.text.secondary,
  backgroundColor        : palette.background.default,
  borderRadius           : shape.borderRadius,
  margin                 : spacing(1),
  width                  : '200px',
  [`& .${classes.title}`]: {
    fontWeight: 'bold',
    fontSize  : '1.5rem',
    color     : '#fff'
  },
  [`& .${classes.progress}`]: {
    height         : 10,
    borderRadius   : 5,
    marginTop      : spacing(1),
    backgroundColor: palette.background.default
  }
}))
